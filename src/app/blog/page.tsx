import Link from "next/link";
import { blogs } from "@/data/blogs";
import { MainLayout } from "@/components/layout/MainLayout";

export default function BlogPage() {
  return (
    <MainLayout>
      <section className="py-20 bg-gradient-to-br from-slate-100 via-white to-slate-200">

        <div className="max-w-6xl mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Interior Design Blog
            </h1>
            <p className="text-gray-600 mt-3">
              Ideas, trends & cost guides
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {blogs.map((blog, index) => (
              <div key={blog.slug || index}>
                <Link href={`/blog/${blog.slug}`}>

                  <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden group cursor-pointer">

                    {/* Image */}
                    <div className="h-52 overflow-hidden relative">
                      <img
  src="/gallery/item-1.jpg"
  alt={blog.title}
  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
/>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6">

                      <span className="text-xs bg-blue-500 text-white px-3 py-1 rounded-full">
                        {blog.category}
                      </span>

                      <h2 className="text-xl font-bold mt-4 group-hover:text-blue-600">
                        {blog.title}
                      </h2>

                      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                        {blog.description}
                      </p>

                      <div className="mt-4 text-blue-600 font-medium">
                        Read More →
                      </div>

                    </div>

                  </div>

                </Link>
              </div>
            ))}

          </div>

        </div>

      </section>
    </MainLayout>
  );
}