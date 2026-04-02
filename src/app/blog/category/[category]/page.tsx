import { blogs } from "@/data/blogs";
import Link from "next/link";

type Props = {
  params: Promise<{ category: string }>;
};

export default async function CategoryPage({ params }: Props) {
  const { category } = await params; // ✅ FIX

  const filteredBlogs = blogs.filter(
    (b) => b.category === category
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 capitalize">
        {category.replace("-", " ")}
      </h1>

      <div className="grid gap-6">
        {filteredBlogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="block p-5 border rounded-xl hover:shadow-md"
          >
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-600">{blog.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}