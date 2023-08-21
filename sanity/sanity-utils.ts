import { createClient, groq } from "next-sanity";
import { SanityDocument } from "@sanity/client";

import { apiVersion, dataset, projectId, useCdn } from "./env";
import { Project, About, Work, Skill, Experience, Testimonials, Brands, Messages } from "@/types/Types";



export async function getAbouts(): Promise<About[]> {

    const client = createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn,
    });

    return client.fetch (
        groq`*[_type == "about"]{
            _id,
            _createdAt,
            title,
            description,
            "image": image.asset->url,
        }`
    )

}

export async function getProjects(): Promise<Project[]> {

    const client = createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn,
    });

    return client.fetch (
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url, 
            github,
            content
        }`
    )

}


export async function getWorks(): Promise<Work[]> {

    const client = createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn,
    });

    return client.fetch (
        groq`*[_type == "work"]{
            _id,
            _createdAt,
            title,
            description,
            "image": image.asset->url,
            codeLink, 
            projectLink,
            tags
        }`
    )

}

export async function getSkills(): Promise<Skill[]> {

    const client = createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn,
    });

    return client.fetch (
        groq`*[_type == "skill"]{
            _id,
            _createdAt,
            name,
            bgColor,
            "icon": icon.asset->url,
        }`
    )

}

export async function getExperiences(): Promise<Experience[]> {

    const client = createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn,
    });

    return client.fetch (
        groq`*[_type == "experience"] | order(_createdAt desc)
        {
            _id,
            _createdAt,
            company,
            role,
            year,
            companyLink,
            responsibilities,
   
        }`
    )

}

export async function getTestimonials(): Promise<Testimonials[]> {

    const client = createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn,
    });

    return client.fetch (
        groq`*[_type == "testimonial"]{
            _id,
            _createdAt,
            name,
            company,
            feedback,
            "image": image.asset->url,
        }`
    )

}

export async function getBrands(): Promise<Brands[]> {

    const client = createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn,
    });

    return client.fetch (
        groq`*[_type == "brand"]{
            _id,
            _createdAt,
            name,
            "image": image.asset->url,
        }`
    )

}

export async function getMessages(): Promise<Messages[]> {

    const client = createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn,
    });

    return client.fetch (
        groq`*[_type == "contact"]{
            _id,
            _createdAt,
            name,
            email,
            message,

        }`
    )

}

// Create a write client
export const sanityWriteClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    token: process.env.SANITY_WRITE_TOKEN // Add this line
  });