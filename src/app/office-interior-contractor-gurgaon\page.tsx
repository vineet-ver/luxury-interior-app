"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { MainLayout } from "@/components/layout/MainLayout";

export default function GurgaonInteriorPage() {

return (

<MainLayout>

<section className="py-24 bg-white">

<Container>

<h1 className="text-4xl font-bold mb-6">
Office Interior Contractor in Gurgaon
</h1>

<Image
src="/location_images/office-interior-gurgaon.jpg"
alt="Corporate office interior design project in Gurgaon by ITSS"
width={1200}
height={700}
className="rounded-xl mb-8"
/>

<p className="text-black/70 leading-relaxed max-w-3xl mb-6">

ITSS provides premium office interior contracting services in
Gurgaon including corporate workspace design, commercial
interior execution and turnkey office fit-out projects.

</p>

<p className="text-black/70 leading-relaxed max-w-3xl mb-6">

Our team delivers complete commercial interior solutions for
corporate offices, coworking spaces and enterprise workplaces.

</p>

<p className="text-black/70 leading-relaxed max-w-3xl">

We serve major business hubs in Gurgaon including Cyber City,
Golf Course Road, Udyog Vihar and Sohna Road.

</p>

</Container>

</section>

</MainLayout>

);
}
