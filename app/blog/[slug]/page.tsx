// ./nextjs-app/app/blog/[slug]/page.tsx

import { SanityDocument } from "@sanity/client";
import Post from "@/app/blog/_components/Post";
import { postPathsQuery, postQuery } from "@/sanity/sanity-utils";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { client } from "@/sanity/lib/client";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  // Important, use the plain Sanity Client here
  const posts = await client.fetch(postPathsQuery);

  return posts;
}

export default async function Page({ params }: { params: any }) {
  const post = await sanityFetch<SanityDocument>({ query: postQuery, params });

  return <Post post={post} />;
}