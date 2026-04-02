"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/content/siteData";
import { MainLayout } from "@/components/layout/MainLayout";
import { Container } from "@/components/ui/Container";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { X, Search, ArrowUpRight } from "lucide-react";

export default function GalleryClient() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  // Scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Categories
  const categories = [
    "All",
    ...new Set(siteData.gallery.map((item) => item.category)),
  ];

  // Filter logic
  const filteredGallery = siteData.gallery
    .filter(
      (item) =>
        activeCategory === "All" || item.category === activeCategory
    )
    .filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <MainLayout>
      <div className="relative bg-luxury-white min-h-screen">

        {/* Scroll Progress */}
        <motion.div
          style={{ scaleX }}
          className="fixed top-0 left-0 right-0 h-1 bg-luxury-gold origin-left z-50"
        />

        {/* Sticky CTA */}
        <div className="fixed bottom-6 right-6 z-50">
          <Link href="/contact">
            <button className="bg-luxury-gold px-5 py-3 rounded-full text-white shadow-lg text-sm">
              Get Quote
            </button>
          </Link>
        </div>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          className="fixed bottom-6 left-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg text-sm"
        >
          WhatsApp
        </a>

        {/* Header */}
        <section className="pt-32 pb-16 text-center">
          <Container>
            <nav className="text-sm mb-4 text-gray-400">
              Home / Gallery
            </nav>

            <h1 className="text-4xl md:text-6xl font-bold text-luxury-onyx mb-4">
              Interior Design Gallery
            </h1>

            <p className="text-sm text-luxury-onyx/60 max-w-lg mx-auto">
              Explore our luxury residential & commercial projects.
            </p>
          </Container>
        </section>

        {/* Search */}
        <section className="pb-6">
          <Container>
            <div className="max-w-md mx-auto relative">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-5 py-3 text-sm rounded-full border border-luxury-platinum focus:outline-none focus:ring-2 focus:ring-luxury-gold"
              />
              <Search className="absolute right-4 top-3 text-gray-400 w-4 h-4" />
            </div>
          </Container>
        </section>

        {/* Category Filter */}
        <section className="pb-8">
          <Container>
            <div className="flex gap-2 justify-center flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 text-xs rounded-full border transition ${
                    activeCategory === cat
                      ? "bg-luxury-gold text-white"
                      : "text-luxury-onyx border-luxury-platinum"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Container>
        </section>

        {/* 🔥 SMALL GRID */}
        <section className="pb-32">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredGallery.map((item, index) => (
                <motion.div
                  key={item.id}
                  layoutId={`card-${item.id}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.03 }}
                  onClick={() => setSelectedId(item.id)}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/30 bg-white/20 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-square">

                    {/* Image */}
                    <Image
                      src={item.src}
                      alt={`${item.title} - ${item.category}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />

                    {/* Content */}
                    <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition">
                      <p className="text-[10px] text-white/70 uppercase">
                        {item.category}
                      </p>
                      <h3 className="text-white text-sm font-semibold truncate">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Modal */}
        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              <motion.div
                className="absolute inset-0 bg-black/80"
                onClick={() => setSelectedId(null)}
              />

              {filteredGallery
                .filter((item) => item.id === selectedId)
                .map((item) => (
                  <motion.div
                    key={item.id}
                    layoutId={`card-${item.id}`}
                    className="relative bg-white max-w-4xl w-full rounded-2xl overflow-hidden z-10"
                  >
                    <button
                      onClick={() => setSelectedId(null)}
                      className="absolute top-4 right-4 z-10"
                    >
                      <X />
                    </button>

                    <div className="grid md:grid-cols-2">
                      <Image
                        src={item.src}
                        alt={item.title}
                        width={800}
                        height={800}
                        className="object-cover"
                      />

                      <div className="p-6">
                        <h2 className="text-2xl font-bold mb-3">
                          {item.title}
                        </h2>

                        <p className="text-gray-600 text-sm mb-4">
                          {item.description}
                        </p>

                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <p><b>Category:</b> {item.category}</p>
                          <p><b>Year:</b> {item.year}</p>
                          <p><b>Location:</b> {item.Location}</p>
                          <p><b>Client:</b> Confidential</p>
                        </div>

                        <Link href="/contact">
                          <button className="mt-4 flex items-center gap-2 text-luxury-gold font-bold text-sm">
                            Start Project <ArrowUpRight size={16} />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </MainLayout>
  );
}