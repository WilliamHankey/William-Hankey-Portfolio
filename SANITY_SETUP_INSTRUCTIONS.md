# Sanity Studio Setup Instructions

## Quick Setup Guide

Since your Sanity Studio is in a separate project, follow these steps to add the project schema:

### Step 1: Copy the Schema File

1. The schema is already set up in `sanity-studio/schemas/project.js` and deployed
2. Copy its entire contents
3. In your Sanity Studio project, create a new file: `schemas/project.ts` (or `schemas/project.js` if using JavaScript)
4. Paste the copied content into that file

### Step 2: Register the Schema

In your Sanity Studio project, find your schema index file (usually `schemas/index.ts` or `schemas/index.js`) and add:

**TypeScript:**
```typescript
import project from './project'

export default [
  project,
  // ... your other schemas
]
```

**JavaScript:**
```javascript
import project from './project'

export default [
  project,
  // ... your other schemas
]
```

### Step 3: Restart Your Sanity Studio

After adding the schema:
1. Stop your Sanity Studio dev server (if running)
2. Restart it with `npm run dev` or `sanity dev`
3. You should now see "Project" in your Sanity Studio sidebar

### Step 4: Create Your First Project

1. Click on "Project" in the Sanity Studio sidebar
2. Click "Create new"
3. Fill in all the required fields:
   - **Title**: e.g., "Synergy Flow"
   - **Slug**: Will auto-generate from title (or click "Generate" button)
   - **Description**: Short description for the project list
   - **Short Overview**: Longer description for the project detail page
   - **Cover Image**: Upload the main project image
   - **Icons**: Add CSS icon classes (e.g., "devicon-react-original")
   - **Live Link**: Optional URL to the live project
   - **Tech Stack**: Add technologies with name and icon class
   - **Challenges & Solutions**: Add challenge items
   - **Key Features**: Add feature items with icons
   - **Showcase**: Add showcase images with titles and descriptions

4. Click "Publish" when done

### Step 5: Verify Connection

1. Make sure your `.env.local` file has the correct Sanity credentials
2. Restart your Next.js dev server
3. Check your portfolio website - projects should now load from Sanity!

## Schema Structure

The schema matches your existing project data structure:

- **title**: Project name
- **slug**: URL-friendly identifier (auto-generated from title)
- **description**: Short description for listings
- **shortOverview**: Detailed overview for project pages
- **image**: Cover image (Sanity image type)
- **icons**: Array of CSS icon classes
- **link**: Optional live project URL
- **techStack**: Array of {name, icon} objects
- **challenges**: Array of {title, description} objects
- **keyFeatures**: Array of {icon, text} objects
- **showcase**: Array of {image, title, description} objects

## Troubleshooting

### Projects not showing up?
- Check that your `.env.local` has the correct `NEXT_PUBLIC_SANITY_PROJECT_ID`
- Verify the dataset name matches (usually "production")
- Make sure projects are published in Sanity Studio (not just saved as drafts)
- Check browser console for any error messages

### Schema not appearing in Studio?
- Make sure you've imported and exported the schema in your `schemas/index.ts`
- Restart your Sanity Studio dev server
- Check for any TypeScript/JavaScript errors in the schema file

### Images not loading?
- Make sure images are uploaded to Sanity (not external URLs)
- Check that the image field is properly configured in the schema
- Verify the GROQ query is correctly accessing `image.asset->url`

## Need Help?

If you encounter any issues:
1. Check the browser console for errors
2. Verify your Sanity project ID and dataset name
3. Make sure projects are published (not drafts) in Sanity Studio
4. The app will fall back to hardcoded data if Sanity connection fails

