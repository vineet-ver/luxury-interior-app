import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import { MainLayout } from "@/components/layout/MainLayout";

type Props = {
  params: Promise<{ slug: string }>;
};

function getReadingTime(html: string) {
  const text = html.replace(/<[^>]+>/g, "");
  const words = text.split(" ").length;
  return Math.ceil(words / 200);
}

export default async function BlogDetail({ params }: Props) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return notFound();

  const readingTime = getReadingTime(blog.content);

  return (
    <MainLayout>
      <article className="pt-24 bg-white pb-24"> {/* ✅ footer gap */}

        {/* HERO */}
        <div className="max-w-5xl mx-auto px-4">
          <img
  src="/gallery/item-1.jpg"
  alt={blog.title}
  className="w-full h-[420px] object-cover rounded-xl"
/>
        </div>

        {/* HEADER */}
        <header className="max-w-3xl mx-auto px-4 mt-10">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            {blog.title}
          </h1>

          <p className="text-gray-500 mt-4 text-lg">
            {blog.description}
          </p>

          <div className="mt-4 text-sm text-gray-400">
            ⏱ {readingTime} min read
          </div>
        </header>

        {/* CONTENT */}
        <section className="max-w-2xl mx-auto px-4 mt-12">

          <div
            className="
              text-gray-800 leading-8 text-[18px]

              [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mt-10
              [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-12 [&>h2]:mb-4
              [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-8

              [&>p]:mt-5
              [&>ul]:mt-5 [&>ul]:pl-6
              [&>li]:mb-2

              [&>img]:my-10 [&>img]:rounded-xl

              [&>table]:w-full [&>table]:mt-8 [&>table]:border
              [&>th]:border [&>th]:p-3 [&>th]:bg-gray-100
              [&>td]:border [&>td]:p-3

              [&>blockquote]:border-l-4 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:mt-6
            "
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

        </section>

        {/* 🔥 FAQ LUXURY CARD */}
        <div className="max-w-2xl mx-auto px-4 mt-16">
          <div className="bg-gray-50 border rounded-2xl p-6 shadow-sm">

            <h2 className="text-2xl font-semibold mb-4">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 text-gray-700">

              <div>
                <p className="font-medium">What makes a good office interior design?</p>
                <p className="text-sm text-gray-600">
                  A balance of comfort, functionality, and aesthetics.
                </p>
              </div>

              <div>
                <p className="font-medium">How can I design a small office?</p>
                <p className="text-sm text-gray-600">
                  Use smart layouts, compact furniture, and minimal design.
                </p>
              </div>

              <div>
                <p className="font-medium">Which colors are best for offices?</p>
                <p className="text-sm text-gray-600">
                  Blue, green, and neutral tones work best.
                </p>
              </div>

            </div>

          </div>
        </div>

      </article>
    </MainLayout>
  );
}