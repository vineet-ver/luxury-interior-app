import type { Metadata } from "next";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import { MainLayout } from "@/components/layout/MainLayout";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Office Interior Design Blog | Cost Guides & Workspace Ideas India | ITSS",
  description:
    "Expert guides on office interior design costs, workspace ideas, fit-out planning and commercial interior trends in India. By ITSS — 250+ projects, 10+ years experience.",
  keywords: [
    "office interior design blog india",
    "interior design cost guide india",
    "office interior ideas",
    "commercial interior design tips",
    "workspace design guide",
    "interior design per sq ft cost india",
    "office fitout guide delhi ncr",
  ],
  alternates: {
    canonical: "https://www.itss.co.in/blog",
  },
  openGraph: {
    title: "Office Interior Design Blog | ITSS",
    description: "Cost guides, workspace ideas and interior design tips for commercial spaces in India.",
    url: "https://www.itss.co.in/blog",
    siteName: "ITSS Interior Solutions",
    images: [{ url: "https://www.itss.co.in/hero_images/interior-bg.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const blogListSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "ITSS Interior Design Blog",
  url: "https://www.itss.co.in/blog",
  description: "Expert guides on office interior design, costs and workspace ideas in India.",
  publisher: {
    "@type": "Organization",
    name: "ITSS Interior Solutions",
    url: "https://www.itss.co.in",
  },
};

export default function BlogListPage() {
  return (
    <>
      <Script
        id="blog-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <MainLayout>
        <section className="py-24 bg-white">
          <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 py-16 px-4">
            <div className="max-w-5xl mx-auto">

              <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                  Interior Design Blog
                </h1>
                <p className="text-gray-600 mt-3 text-lg">
                  Cost guides, office design ideas &amp; workspace planning tips for India
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {blogs.map((blog) => (
                  <Link key={blog.slug} href={`/blog/${blog.slug}`}>
                    <article className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition duration-300 overflow-hidden">
                      <div className="h-40 overflow-hidden bg-gray-100 flex items-center justify-center">
                        <div className="text-center p-6">
                          <span className="text-xs uppercase tracking-widest text-[#c8a951] font-semibold">
                            {blog.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h2 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2 hover:text-[#c8a951] transition">
                          {blog.title}
                        </h2>
                        <p className="text-gray-500 text-sm line-clamp-2">{blog.description}</p>
                        <span className="inline-block mt-4 text-sm text-[#0b1f3a] font-medium">
                          Read more →
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
