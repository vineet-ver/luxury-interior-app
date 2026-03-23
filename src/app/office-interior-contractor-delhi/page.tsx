"use client";

import Link from "next/link";

export default function DelhiPage() {
  return (
    <main className="px-6 py-20 max-w-5xl mx-auto">

      {/* ================= HERO ================= */}
      <h1 className="text-4xl font-bold mb-6">
        EPC, MEP, HVAC & Electrical Services in Delhi NCR
      </h1>

      <p className="text-lg text-gray-600 mb-6">
        ITSS (India Technical Solution Services) provides professional 
        <strong> EPC, MEP, HVAC and electrical services in Delhi NCR</strong> 
        including Delhi, Noida, Gurgaon and Ghaziabad for commercial and industrial projects.
      </p>

      {/* ================= SERVICES ================= */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Our Engineering Services in Delhi
      </h2>

      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li>EPC project execution</li>
        <li>MEP system design & installation</li>
        <li>HVAC installation & maintenance</li>
        <li>Electrical contracting services</li>
        <li>Networking & IT infrastructure</li>
      </ul>

      {/* ================= GEO KEYWORDS ================= */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Serving Across Delhi NCR
      </h2>

      <p className="text-gray-600">
        We provide services across Delhi, Noida, Gurgaon and Ghaziabad 
        delivering high-quality engineering solutions for offices, factories 
        and commercial buildings.
      </p>

      {/* ================= INTERNAL LINKING ================= */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Explore Our Services
      </h2>

      <div className="space-y-2 text-blue-600">

        <Link href="/services/epc-services-delhi">
          EPC Services Delhi NCR
        </Link>

        <br />

        <Link href="/services/mep-services-india">
          MEP Services India
        </Link>

        <br />

        <Link href="/services/hvac-services-delhi">
          HVAC Services Delhi
        </Link>

        <br />

        <Link href="/services/electrical-contractor-delhi">
          Electrical Contractor Delhi
        </Link>

        <br />

        <Link href="/services/networking-services-india">
          Networking Services India
        </Link>

      </div>

      {/* ================= FAQ ================= */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4 text-gray-600">

        <div>
          <strong>Do you provide EPC services in Delhi?</strong>
          <p>Yes, ITSS provides EPC services across Delhi NCR.</p>
        </div>

        <div>
          <strong>What services do you offer in Delhi?</strong>
          <p>We offer EPC, MEP, HVAC, electrical and networking services.</p>
        </div>

      </div>

      {/* ================= CTA ================= */}
      <div className="mt-12">
        <Link href="/contact">
          <button className="px-6 py-3 bg-black text-white rounded-lg">
            Get Free Consultation →
          </button>
        </Link>
      </div>

    </main>
  );
}
