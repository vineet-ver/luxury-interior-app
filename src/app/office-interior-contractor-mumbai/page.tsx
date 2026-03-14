"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { MainLayout } from "@/components/layout/MainLayout";

export default function MumbaiInteriorPage() {

return (

<MainLayout>

<section className="py-24 bg-white">

<Container>

<h1 className="text-4xl font-bold mb-6">
Office Interior Contractor in Mumbai
</h1>

<Image
src="/location_images/office-interior-mumbai.jpg"
alt="Corporate office interior design project in Mumbai by ITSS"
width={1200}
height={700}
className="rounded-xl mb-8"
/>

<p className="text-black/70 leading-relaxed max-w-3xl mb-6">

ITSS provides professional office interior contracting services
in Mumbai including corporate workspace interiors, commercial
interior design and turnkey office interior projects.

</p>

<p className="text-black/70 leading-relaxed max-w-3xl mb-6">

We deliver complete commercial interior solutions from planning
and design to final execution and project handover.

</p>

<p className="text-black/70 leading-relaxed max-w-3xl">

Our services cover major business districts in Mumbai including
BKC, Andheri, Lower Parel and Nariman Point.

</p>

</Container>

</section>

</MainLayout>

);
}
