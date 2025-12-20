# Update Sanity Studio Schema

## Overview

Your current Sanity schema has a different structure than your hardcoded projects. This guide will help you update your Sanity Studio schema to match the exact structure used in your portfolio.

## Current vs. Required Structure

### Current Sanity Schema:
- ✅ `title`, `slug`, `description`, `image` - Correct
- ❌ `liveUrl` - Should be `link`
- ❌ `techStack` - Array of strings, should be array of objects with `name` and `icon`
- ❌ `challenges` - Array of strings, should be array of objects with `title` and `description`
- ❌ `keyFeatures` - Array of strings, should be array of objects with `icon` and `text`
- ❌ Missing `icons` field (array of CSS icon classes)
- ❌ Missing `shortOverview` field (separate from description)

### Required Structure (matches hardcoded):
- `title` (string)
- `slug` (slug)
- `description` (text) - Short description for list view
- `shortOverview` (text) - Longer description for detail page
- `image` (image)
- `icons` (array of strings) - CSS icon classes for list view
- `link` (url, optional) - Live project URL
- `techStack` (array of objects: `{name: string, icon: string}`)
- `challenges` (array of objects: `{title: string, description: string}`)
- `keyFeatures` (array of objects: `{icon: string, text: string}`)
- `showcase` (array of objects: `{image: image, title: string, description: string}`)

## Migration Steps

### Option 1: Update Existing Schema (Recommended if you have data)

1. **Backup your data first!**
   - Export your current projects from Sanity Studio
   - Or note down the current field values

2. **Update the schema file:**
   - Open `sanity-project-schema-updated.ts` in this repository
   - Copy the entire content
   - In your Sanity Studio, open `schemas/project.ts` (or wherever your project schema is)
   - Replace the entire file content with the updated schema

3. **Update field names:**
   - Change `liveUrl` to `link` in your schema
   - Add `icons` field
   - Add `shortOverview` field

4. **Update array structures:**
   - Change `techStack` from array of strings to array of objects
   - Change `challenges` from array of strings to array of objects
   - Change `keyFeatures` from array of strings to array of objects

5. **Migrate existing data:**
   - For each existing project in Sanity Studio:
     - Update `liveUrl` → `link` (rename the field)
     - Convert `techStack` strings to objects: `"React.js"` → `{name: "React.js", icon: "devicon-react-original"}`
     - Convert `challenges` strings to objects: Split by ":" if possible, or create `{title: "Challenge", description: "original string"}`
     - Convert `keyFeatures` strings to objects: `"Feature Name"` → `{icon: "devicon-react-original", text: "Feature Name"}`
     - Add `icons` field: Copy first 2 icons from `techStack`
     - Add `shortOverview`: Copy from `description` or add new content

6. **Restart Sanity Studio:**
   ```bash
   # Stop the current dev server
   # Then restart
   npm run dev
   # or
   sanity dev
   ```

### Option 2: Fresh Start (If you don't mind recreating projects)

1. **Delete existing projects** (optional, only if you want to start fresh)

2. **Update the schema:**
   - Copy `sanity-project-schema-updated.ts` to your Sanity Studio
   - Replace your current project schema

3. **Create new projects** with the updated structure

## Field-by-Field Migration Guide

### 1. Rename `liveUrl` to `link`
```typescript
// Old
defineField({
  name: 'liveUrl',
  ...
})

// New
defineField({
  name: 'link',
  ...
})
```

### 2. Add `icons` field
```typescript
defineField({
  name: 'icons',
  title: 'Icons (CSS classes)',
  type: 'array',
  of: [{ type: 'string' }],
  description: 'Array of CSS icon classes for the project list view',
})
```

### 3. Add `shortOverview` field
```typescript
defineField({
  name: 'shortOverview',
  title: 'Short Overview',
  type: 'text',
  description: 'Longer overview shown in the project detail page',
  validation: (Rule) => Rule.required(),
})
```

### 4. Update `techStack` structure
```typescript
// Old: Array of strings
defineField({
  name: 'techStack',
  type: 'array',
  of: [{ type: 'string' }]
})

// New: Array of objects
defineField({
  name: 'techStack',
  type: 'array',
  of: [{
    type: 'object',
    fields: [
      { name: 'name', type: 'string' },
      { name: 'icon', type: 'string' }
    ]
  }]
})
```

### 5. Update `challenges` structure
```typescript
// Old: Array of strings
defineField({
  name: 'challenges',
  type: 'array',
  of: [{ type: 'string' }]
})

// New: Array of objects
defineField({
  name: 'challenges',
  type: 'array',
  of: [{
    type: 'object',
    fields: [
      { name: 'title', type: 'string' },
      { name: 'description', type: 'text' }
    ]
  }]
})
```

### 6. Update `keyFeatures` structure
```typescript
// Old: Array of strings
defineField({
  name: 'keyFeatures',
  type: 'array',
  of: [{ type: 'string' }]
})

// New: Array of objects
defineField({
  name: 'keyFeatures',
  type: 'array',
  of: [{
    type: 'object',
    fields: [
      { name: 'icon', type: 'string' },
      { name: 'text', type: 'string' }
    ]
  }]
})
```

## Data Migration Script (Optional)

If you have many projects, you might want to create a migration script. Here's a sample:

```javascript
// This would run in Sanity Studio's migration tool
// Convert techStack from strings to objects
export default {
  migrate: {
    techStack: {
      to: 'techStack',
      transform: (value) => {
        if (Array.isArray(value)) {
          return value.map(tech => ({
            _type: 'techStackItem',
            name: tech,
            icon: getIconForTech(tech) // You'd need to implement this
          }));
        }
        return value;
      }
    }
  }
}
```

## After Migration

1. **Update GROQ queries** (already done in `app/projects/[slug]/sanity-data.ts`)
2. **Remove transformation function** - Once schema matches, we can simplify the data fetching
3. **Test your portfolio** - Projects should now load correctly from Sanity

## Need Help?

If you encounter issues:
1. Check Sanity Studio console for errors
2. Verify all required fields are filled
3. Make sure projects are published (not drafts)
4. Restart both Sanity Studio and Next.js dev servers

