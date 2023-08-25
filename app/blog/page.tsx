// ./nextjs-app/app/page.tsx

import { SanityDocument } from "next-sanity";
import Posts from "@/app/blog/_components/Posts";
import { postsQuery } from "@/sanity/sanity-utils";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

export default async function Home() {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });

  return <Posts posts={posts} />;
}

