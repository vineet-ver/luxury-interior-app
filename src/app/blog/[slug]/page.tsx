import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogs";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {

  const post = blogPosts.find(
    (item) => item.slug === params.slug
  );

  if (!post) {
    return { title: "Blog Not Found" };
  }

  return {
    title: post.title + " | ITSS Interiors",
    description: post.description,
  };
}

export default function BlogPost({
  params,
}: {
  params: { slug: string };
}) {

  const post = blogPosts.find(
    (item) => item.slug === params.slug
  );

  if (!post) notFound();

  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <div className="relative w-full h-[400px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-6">
          <div>
            <span className="text-sm bg-white/20 backdrop-blur px-4 py-1 rounded-full text-white">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">

        <div className="prose prose-lg max-w-none whitespace-pre-line text-gray-700">
          {post.content}
        </div>

        {/* Back Button */}
        <div className="mt-12">
          <Link
            href="/blog"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition"
          >
            ← Back to All Blogs
          </Link>
        </div>

      </div>
    </div>
  );
}
