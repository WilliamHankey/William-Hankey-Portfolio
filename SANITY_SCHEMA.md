# Sanity Schema for Projects

This document describes the Sanity schema structure that needs to be created in your Sanity Studio to match the project data structure.

## Project Schema

Create a schema file in your Sanity Studio (typically in `schemas/project.ts` or similar):

```typescript
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortOverview',
      title: 'Short Overview',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icons',
      title: 'Icons (CSS classes)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Array of CSS icon classes (e.g., "devicon-react-original")',
    }),
    defineField({
      name: 'link',
      title: 'Live Link',
      type: 'url',
      description: 'Optional link to the live project',
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Technology Name',
              type: 'string',
            },
            {
              name: 'icon',
              title: 'Icon CSS Class',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'challenges',
      title: 'Challenges & Solutions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Challenge Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'keyFeatures',
      title: 'Key Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon CSS Class',
              type: 'string',
            },
            {
              name: 'text',
              title: 'Feature Text',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'showcase',
      title: 'Showcase Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
```

## Setup Instructions

1. **Add the schema to your Sanity Studio:**
   - Create the schema file in your Sanity Studio project
   - Import and add it to your `schemas/index.ts` (or similar schema configuration file)

2. **Environment Variables:**
   - Add the following to your `.env.local` file:
     ```
     NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
     NEXT_PUBLIC_SANITY_DATASET=production
     NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
     SANITY_API_READ_TOKEN=your-read-token (optional, only if dataset is private)
     ```

3. **Get your Sanity credentials:**
   - Project ID: Found in your Sanity project settings
   - Dataset: Usually "production" or "development"
   - API Version: Use the latest stable version (e.g., "2024-01-01")
   - Read Token: Only needed if your dataset is private (can be found in API settings)

4. **Deploy:**
   - After setting up the schema and environment variables, your Next.js app will automatically fetch projects from Sanity
   - If Sanity is not configured, it will fall back to the hardcoded data

## Notes

- The schema matches exactly with the `Project` interface in `app/projects/[slug]/data.ts`
- Image fields use Sanity's image type, which will be converted to URLs in the GROQ queries
- Slug fields use Sanity's slug type with `current` property
- All array fields are optional but recommended for complete project data

---

# Site Content Schemas (Skills, Testimonials, Profile, Experience, Articles)

The site pulls these sections dynamically from Sanity. Schema files live in `sanity-studio/schemas/` and are registered in `sanity-studio/schemas/index.js`.

## Deploying the schemas

```bash
cd sanity-studio
npm install        # if not already installed
npm run deploy     # deploys the studio (host: wchportfolioadmin.sanity.studio)
```

After deploying, the new content types appear in the Sanity portal sidebar.

## Content types

| Type            | Document to create in the portal             | Where it renders                      |
| --------------- | -------------------------------------------- | ------------------------------------- |
| `siteSettings`  | ONE document (email, CV link, socials, about, hero, footer) | Hero, About, Navbar "Download CV", Footer |
| `skill`         | One per technology (name + logo image)       | Skills grid                           |
| `testimonial`   | One per quote (name, role, quote, photo)     | Testimonials grid                     |
| `experience`    | One per job (role, company, period, bullets) | About → Experience column             |
| `article`       | One per article (title, URL, source)         | About → Articles column               |

## siteSettings fields

- `name` – full name (footer copyright)
- `role` – About badge, e.g. "Product Engineer & UX Strategist"
- `heroGreeting` – hero headline, e.g. "Hello, I'm William. Nice to meet you!"
- `heroIntro` – hero paragraph
- `aboutMe` – array of paragraphs (one `<p>` each) for the About section
- `footerAbout` – short bio in the footer "About Me" column
- `email` – footer contact email
- `location` – footer contact location
- `cvUrl` – direct download URL used by the "Download CV" buttons (Google Drive/Dropbox/Sanity file asset URL)
- `socials` – array of `{ platform, url }`; rendered in the hero and footer. Known platforms (LinkedIn, Dribbble, Behance, Medium, GitHub, X, Instagram, …) get standard icons; anything else shows the platform initial.

> Tip: for a "Download CV" stored inside Sanity itself, upload the PDF as a file asset and paste the asset URL (`...api.sanity.io/files/...`) into `cvUrl`. No custom code needed.

## Frontend data flow

All sections share ONE cached request:

1. Client components call `useSiteData()` (`lib/use-site-data.ts`)
2. → `GET /api/site-data` (`app/api/site-data/route.ts`)
3. → `getSiteData()` (`lib/site-data.ts`) runs the GROQ queries against Sanity server-side
4. → components render Sanity data; if a section has no documents yet, they fall back to the previous hardcoded content

The whole response is cached per page load, so the Skills, About, Testimonials, Navbar, Footer and hero only make a single request total.

