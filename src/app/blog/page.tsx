import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blogs";

export default function BlogPage() {

  const costBlogs = blogPosts.filter(b => b.category === "Cost");
  const corporateBlogs = blogPosts.filter(b => b.category === "Corporate");
  const turnkeyBlogs = blogPosts.filter(b => b.category === "Turnkey");
  const designBlogs = blogPosts.filter(b => b.category === "Design");
  const planningBlogs = blogPosts.filter(b => b.category === "Planning");

  return (
    <div className="bg-white min-h-screen">

      <div className="text-center py-20 bg-gray-50">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Commercial Interior Insights
        </h1>
        <p className="text-gray-600">
          Industry trends & execution guides
        </p>
      </div>

      <Section title="All Articles" blogs={blogPosts} />

    </div>
  );
}

function Section({ title, blogs }: any) {
  if (!blogs || blogs.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">
        {title}
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((post: any) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group border rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={400}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {post.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
