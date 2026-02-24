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
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="whitespace-pre-line leading-relaxed text-gray-700">
          {post.content}
        </div>

        <div className="mt-12">
          <Link href="/blog">
            ← Back to All Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}
