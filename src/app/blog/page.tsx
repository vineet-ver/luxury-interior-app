"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blogs";

export default function BlogPage() {

  const categories = [
    "All",
    "Cost",
    "Corporate",
    "Turnkey",
    "Design",
    "Planning",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter(
          (post) => post.category === activeCategory
        );

  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <div className="text-center py-24 bg-gray-50 border-b">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Commercial Interior Insights
        </h1>
        <p className="text-gray-600 text-lg">
          Expert guides, cost insights & execution strategies
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="max-w-7xl mx-auto px-6 pt-16 flex flex-wrap gap-4 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
              activeCategory === cat
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {filteredBlogs.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-500 bg-white border"
            >
              <div className="relative w-full h-60 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                  {post.category}
                </span>

                <h3 className="text-xl font-semibold mt-4 mb-3 group-hover:text-indigo-600 transition">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}

        </div>
      </div>

    </div>
  );
}
