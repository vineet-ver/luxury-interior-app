import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogs";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find(
    (item) => item.slug === params.slug
  );

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="relative w-full h-[400px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {post.title}
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="whitespace-pre-line leading-relaxed text-gray-700">
          {post.content}
        </div>

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
