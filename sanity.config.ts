/** 
 * Sanity CMS Boilerplate Configuration
 * 
 * To fully launch this, create a free Sanity.io account and drop your authentic Project ID 
 * into your .env.local file as NEXT_PUBLIC_SANITY_PROJECT_ID.
 */

import { defineConfig } from 'sanity'

export default defineConfig({
  name: 'portfolio-studio',
  title: 'Saidul Alom Portfolio',
  
  // Replace these with your Sanity.io dashboard parameters
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  
  basePath: '/studio', 

  schema: {
    types: [
      {
        name: 'project',
        type: 'document',
        title: 'Projects',
        fields: [
          { name: 'title', type: 'string', title: 'Project Title' },
          { name: 'slug', type: 'slug', title: 'URL Slug' },
          { name: 'category', type: 'string', title: 'Category' },
          { name: 'image', type: 'image', title: 'Thumbnail Image' },
          { name: 'github', type: 'url', title: 'GitHub Link' },
          { name: 'live', type: 'url', title: 'Live Preview Link' }
        ]
      }
    ],
  },
})
