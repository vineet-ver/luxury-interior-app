import type { Metadata } from "next";
import Script from "next/script";
import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import { MainLayout } from "@/components/layout/MainLayout";

type Props = {
  params: Promise<{ slug: string }>;
};

// Dynamic metadata per blog post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return { title: "Not Found" };

  return {
    title: `${blog.title} | ITSS Interior Design Blog`,
    description: blog.description,
    alternates: {
      canonical: `https://www.itss.co.in/blog/${slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://www.itss.co.in/blog/${slug}`,
      siteName: "ITSS Interior Solutions",
      images: [{ url: "https://www.itss.co.in/hero_images/interior-bg.png", width: 1200, height: 630 }],
      type: "article",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
    },
    robots: { index: true, follow: true },
  };
}

// Static paths generation
export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.description,
    url: `https://www.itss.co.in/blog/${slug}`,
    publisher: {
      "@type": "Organization",
      name: "ITSS Interior Solutions",
      url: "https://www.itss.co.in",
      logo: { "@type": "ImageObject", url: "https://www.itss.co.in/logo_v2.png" },
    },
    author: {
      "@type": "Organization",
      name: "ITSS Interior Solutions",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.itss.co.in/blog/${slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.itss.co.in" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.itss.co.in/blog" },
      { "@type": "ListItem", position: 3, name: blog.title, item: `https://www.itss.co.in/blog/${slug}` },
    ],
  };

  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-blog" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <MainLayout>
        <article className="max-w-3xl mx-auto px-4 py-20">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <a href="/" className="hover:text-[#c8a951]">Home</a>
            <span>/</span>
            <a href="/blog" className="hover:text-[#c8a951]">Blog</a>
            <span>/</span>
            <span className="text-gray-700 line-clamp-1">{blog.title}</span>
          </nav>

          {/* Category */}
          <span className="text-xs uppercase tracking-widest text-[#c8a951] font-semibold">
            {blog.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#0b1f3a] mt-3 mb-4 leading-tight">
            {blog.title}
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-lg mb-8 leading-relaxed border-b border-gray-100 pb-8">
            {blog.description}
          </p>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-[#0b1f3a] prose-a:text-[#c8a951]"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* CTA */}
          <div className="mt-16 p-8 bg-[#0b1f3a] rounded-2xl text-white text-center">
            <h3 className="text-xl font-bold mb-2">Planning Your Office Interior?</h3>
            <p className="text-white/70 mb-6 text-sm">Get a free consultation from our commercial interior experts in Delhi NCR.</p>
            <a href="/contact">
              <button className="px-8 py-3 bg-[#c8a951] text-white rounded-full hover:bg-[#b8992f] transition font-medium">
                Get Free Quote
              </button>
            </a>
          </div>

        </article>
      </MainLayout>
    </>
  );
}
