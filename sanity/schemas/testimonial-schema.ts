// This is a sanity testimonial schema
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [

    defineField({
        name: 'name',
        title: 'Name', 
        type: 'string',
    }),

    defineField({
      name: 'company',
      title: 'Company', 
      type: 'string',
    }),
    
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image',

        options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Alt',
              type: 'string',
              
            }
          ]
    
    }),

    defineField({
      name: 'feedback',
      title: 'Feedback',
      type: 'string',
    }),

  ],
})

