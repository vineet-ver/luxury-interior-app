"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MainLayout } from "@/components/layout/MainLayout";

interface Props {
  city: string;
}

export default function CityPageClient({ city }: Props) {
  const cityName =
    city.charAt(0).toUpperCase() + city.slice(1);

  return (
    <MainLayout>

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden py-36 text-white bg-black">

        {/* GOLD RADIAL GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(200,169,81,0.25),_transparent_40%)]"></div>

        {/* SUBTLE GRID OVERLAY */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        {/* SOFT GOLD BLUR CIRCLE */}
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#c8a951]/20 blur-[150px] rounded-full"></div>

        <Container className="relative z-10 text-center">

          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            Commercial Interior Designer in {cityName}
            <span className="block text-[#c8a951] mt-4">
              Turnkey Office Interiors & Corporate Fit-Out
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-white/70 text-lg leading-relaxed">
            ITSS is a leading commercial interior contractor in {cityName}
            delivering turnkey office interiors, corporate fit-out services,
            civil execution, and complete commercial interior solutions
            tailored for modern businesses.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">

            <Link
              href="/portfolio"
              className="px-10 py-4 bg-[#c8a951] text-black rounded-full font-semibold hover:bg-white transition duration-300"
            >
              View Our Projects →
            </Link>

            <Link
              href="/contact"
              className="px-10 py-4 border border-white rounded-full font-semibold hover:bg-white hover:text-black transition duration-300"
            >
              Get Free Consultation
            </Link>

          </div>

        </Container>
      </section>
      {/* ================= HERO END ================= */}


      {/* ================= SERVICES SECTION ================= */}
      <section className="py-28 bg-white text-black">
        <Container>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
            Our Interior Services in {cityName}
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              "Turnkey Office Interior Execution",
              "Corporate Interior Fit-Out",
              "Commercial Civil & MEP Works",
              "Office Space Planning & Layout Design",
              "Workspace Furniture Maintenance",
              "Enterprise Interior Project Management",
            ].map((service, i) => (
              <div
                key={i}
                className="p-8 bg-[#f9f9f9] rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {service}
                </h3>
                <p className="text-black/60 leading-relaxed">
                  Professional {service.toLowerCase()} services
                  delivered across {cityName} with precision,
                  quality and timely execution.
                </p>
              </div>
            ))}

          </div>

        </Container>
      </section>
      {/* ================= SERVICES END ================= */}


      {/* ================= CTA SECTION ================= */}
      <section className="relative py-28 bg-black text-white text-center overflow-hidden">

        {/* GOLD GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(200,169,81,0.25),_transparent_40%)]"></div>

        <Container className="relative z-10">

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
            Looking for Commercial Interior Designer in {cityName}?
          </h2>

          <p className="max-w-2xl mx-auto text-white/70 mb-10">
            Let’s design high-performance workspaces that enhance
            productivity, reflect your brand identity and
            elevate corporate presence.
          </p>

          <Link href="/contact">
            <button className="px-12 py-5 bg-[#c8a951] text-black rounded-full font-semibold hover:bg-white transition duration-300">
              Schedule Site Visit →
            </button>
          </Link>

        </Container>
      </section>
      {/* ================= CTA END ================= */}

    </MainLayout>
  );
}
