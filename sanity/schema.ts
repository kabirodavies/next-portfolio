import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'

import about from './schemas/about-schema'
import project from './schemas/project-schema'
import work from './schemas/works-schema'
import skill from './schemas/skills-schema'
import experience from './schemas/workExperience-schema'
import testimonial from './schemas/testimonial-schema'
import brand from './schemas/brand-schema'
import contact from './schemas/contact-schema'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, about, project, 
    work, skill, experience, testimonial, brand, contact],
}