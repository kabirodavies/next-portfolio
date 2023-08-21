import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [

    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),

    defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { 
            source: 'name',
            maxLength: 96,
          },
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
        name: 'github',
        title: 'Github',
        type: 'url',
    }),

    defineField({
        name: 'url',
        title: 'Url',
        type: 'url',
    }),

    defineField({
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{ type: 'block' }],
    }),

  ], 
});
