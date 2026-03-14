"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { MainLayout } from "@/components/layout/MainLayout";

export default function DelhiInteriorPage() {

return (

<MainLayout>

<section className="py-24 bg-white">

<Container>

<h1 className="text-4xl font-bold mb-6">
Office Interior Contractor in Delhi
</h1>

<Image
src="/location_images/office-interior-delhi.jpg"
alt="Corporate office interior design project in Delhi NCR by ITSS"
width={1200}
height={700}
className="rounded-xl mb-8"
/>

<p className="text-black/70 leading-relaxed max-w-3xl mb-6">

ITSS is a trusted office interior contractor in Delhi delivering
premium commercial interior design and turnkey office interior
solutions for corporate workplaces and commercial buildings.

</p>

<p className="text-black/70 leading-relaxed max-w-3xl mb-6">

Our services include workspace planning, civil execution,
electrical and HVAC integration, and complete office fit-out
solutions tailored for modern business environments.

</p>

<p className="text-black/70 leading-relaxed max-w-3xl">

We provide professional office interior services across Delhi
including Connaught Place, Saket, Nehru Place, Okhla and other
major commercial hubs.

</p>

</Container>

</section>

</MainLayout>

);
}
