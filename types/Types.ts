import { PortableTextBlock } from "sanity";

export type Project = {
    id: string;
    _createdAt : string;
    name: string;
    slug: string;
    image: string;
    url: string; 
    github: string;
    content: PortableTextBlock
}

export type About = {
    _id: string;
    _createdAt : string;
    title: string;
    description: string;
    image: string;
}

export type Work = {
    id: string;
    _createdAt : string;
    title: string;
    description: string;
    image: string;
    codeLink: string; 
    projectLink: string;
    tags: string
}

export type Skill = {
    id: string;
    _createdAt : string;
    name: string;
    bgColor: string;
    icon: string;
}

export type Experience = {
    id: string;
    _createdAt : string;
    company : string;
    role : string;
    year : string;
    companyLink : string;
    responsibilities : string;
}

export type Testimonials = {
    _id: string;
    _createdAt : string;
    name: string;
    company : string;
    feedback : string;
    image: string;
}

export type Brands = {
    _id: string;
    _createdAt : string;
    name: string;
    image: string;
}


export type Messages = {
    _type: 'contact';
    _id: string;
    _createdAt: string;
    name: string;
    email: string;
    message: string;
}


  

