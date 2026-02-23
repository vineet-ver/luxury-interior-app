import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogs";

export default function BlogPost({
  params,
}: {
  params: { slug: string };
}) {

  const { slug } = params;

  const post = blogPosts.find(
    (item) => item.slug === slug
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

      <div className="prose max-w-none whitespace-pre-line">
        {post.content}
      </div>
    </div>
  );
}
