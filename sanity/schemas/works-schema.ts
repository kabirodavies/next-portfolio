import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'work',
  title: 'Works',
  type: 'document',
  fields: [
    
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
        name: 'description',
        title: 'Description',
        type: 'string',
    }),

    defineField({
        name: 'projectLink',
        title: 'Project Link',
        type: 'url',
    }),

    defineField({
        name: 'codeLink',
        title: 'Code Link',
        type: 'url',
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
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ 
            name:'tag',
            title:'Tag',
            type: 'string' 
        }],
    }),


  ],

})
