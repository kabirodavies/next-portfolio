// This is a sanity schema
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [

    defineField({
      name: 'company',
      title: 'Company', 
      type: 'string',
    }),

    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),

    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),

    defineField({
      name: 'companyLink',
      title: 'Company Link',
      type: 'url', 
    }),
  
    // Add responsibilities field
    defineField({
      name: 'responsibilities',
      title: 'Responsibilities',
      type: 'array', // Allow multiple responsibilities
      of: [
        {
          type: 'string', // Each responsibility will be a string
        },
      ],
    }),
  ],
})
