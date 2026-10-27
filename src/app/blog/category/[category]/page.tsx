import { blogs } from "@/data/blogs";
import Link from "next/link";

type Props = {
  params: Promise<{ category: string }>;
};

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = category || "";

  const filteredBlogs = blogs.filter(
    (blog) => blog?.category === cat
  );

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {cat?.replace("-", " ") || "Category"}
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredBlogs.map((blog, index) => (
          <Link key={blog.slug || index} href={`/blog/${blog.slug}`}>
            <div className="border p-4 rounded-lg hover:shadow">
              <h2 className="font-semibold">{blog.title}</h2>
              <p className="text-sm text-gray-600">{blog.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}