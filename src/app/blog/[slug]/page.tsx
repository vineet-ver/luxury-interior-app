import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogs";
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
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: post.title + " | ITSS Interiors",
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: post.image,
        },
      ],
    },
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

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">
        {post.title}
      </h1>

      <img
        src={post.image}
        alt={post.title}
        className="w-full rounded-xl mb-8"
      />

      <div className="whitespace-pre-line leading-relaxed text-gray-700">
        {post.content}
      </div>
    </div>
  );
}
