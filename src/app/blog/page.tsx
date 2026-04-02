import Link from "next/link";
import { blogs } from "@/data/blogs";
import { MainLayout } from "@/components/layout/MainLayout";


export default function BlogListPage() {
  return (
    <MainLayout>

<section className="py-24 bg-white">
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 py-16 px-4">

      <div className="max-w-5xl mx-auto">

        {/* SEO Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Interior Design Blog in India
          </h1>
          <p className="text-gray-600 mt-3 text-lg">
            Cost guides, office design ideas & interior design career tips
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {blogs.map((blog) => (
            <Link key={blog.slug} href={`/blog/${blog.slug}`}>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition duration-300 overflow-hidden">

                {/* Image */}
                <div className="h-40 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
                    alt="blog"
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-5">

                  {/* Category */}
                  <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                    {blog.category.replace("-", " ")}
                  </span>

                  {/* Title */}
                  <h2 className="text-lg font-semibold text-gray-900 mt-2 leading-snug">
                    {blog.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                    {blog.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-4 text-sm font-medium text-blue-600">
                    Read More →
                  </div>

                </div>
              </div>

            </Link>
          ))}

        </div>

      </div>
    </div>

</section>

</MainLayout>
  );
}