    "use client";

    import Image from "next/image";
    import Link from "next/link";
    import { Container } from "@/components/ui/Container";
    import { MainLayout } from "@/components/layout/MainLayout";
    import { motion } from "framer-motion";

    export default function HomeClient() {

    const services = [
    { title: "EPC Projects", img: "/images/epc.png" },
    { title: "MEP Projects", img: "/images/mep.png" },
    { title: "Electrical Services", img: "/images/electrical.png" },
    { title: "HVAC Services", img: "/images/hvac.png" },
    { title: "IT & Networking", img: "/images/networking.png" },
    { title: "Fire Fighting", img: "/images/fire.png" },
    { title: "Carpentry Services", img: "/images/carpentry.png" },
    ];

    return (
    <MainLayout>

    {/* ================= HERO ================= */}
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">

    {/* BACKGROUND */}
    <div className="absolute inset-0 -z-10">
        <Image
        src="/hero_images/interior-bg.png"
        alt="Interior"
        fill
        priority
        className="object-cover opacity-70"
        />
    </div>

    {/* MAIN CARD */}
    <div className="relative z-10 w-[90%] max-w-5xl bg-[#e9f0ef]/95 backdrop-blur-xl rounded-[40px] p-8 md:p-12 pb-20 shadow-[0_25px_80px_rgba(0,0,0,0.2)]">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>
            <p className="text-sm text-black/50 mb-3">
            Premium Interior Solutions
            </p>

            <h1 className="text-[2.3rem] md:text-[3rem] font-bold leading-[1.1] text-black">
            Commercial Interior Design
            <span className="block italic text-black/70">
                for Modern Workspaces
            </span>
            </h1>

            <Link href="/contact">
            <button className="mt-6 px-6 py-3 bg-[#c8a951] text-white rounded-full text-sm hover:scale-105 transition">
                Explore More →
            </button>
            </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[300px] flex justify-center">

            <div className="w-[80%] h-full overflow-hidden rounded-t-[180px] rounded-b-3xl">
            <Image
                src="/hero_images/hero-card.png"
                alt="Office interior"
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
            />
            </div>

            {/* FLOAT CARD */}
            <div className="absolute bottom-4 left-0 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs shadow-xl">
            ⭐⭐⭐⭐⭐  
            <p className="text-black/60 text-[10px]">
                Trusted by clients
            </p>
            </div>

        </div>

        </div>

        {/* FLOATING FEATURES */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-35px] bg-white rounded-2xl shadow-xl px-8 py-4 flex gap-10">

        {["Eco","Pro","Quality","Custom"].map((item, i) => (
            <div key={i} className="text-center">
            <p className="text-[#c8a951] font-bold text-sm">
                0{i + 1}
            </p>
            <p className="text-xs text-black/60">
                {item}
            </p>
            </div>
        ))}

        </div>

    </div>

    </section>

    {/* ================= PREMIUM ABOUT SECTION ================= */}
<section className="py-28 bg-[#f5f3ef]">
<Container>

{/* TOP */}
<div className="grid md:grid-cols-2 gap-12 items-center">

{/* LEFT */}
<div>
<h2 className="text-[3rem] md:text-[3.5rem] font-bold leading-[1.1] text-black">
ABOUT <br /> US
</h2>

<p className="mt-6 text-black/70 max-w-md">
We deliver modern commercial interiors with engineering precision 
and premium design across India.
</p>
</div>

{/* RIGHT IMAGES */}
<div className="grid grid-cols-2 gap-4">

<div className="relative h-[180px] rounded-2xl overflow-hidden">
<Image src="/images/about1.png" alt="Interior" fill className="object-cover"/>
</div>

<div className="relative h-[180px] rounded-2xl overflow-hidden">
<Image src="/images/about2.png" alt="Interior" fill className="object-cover"/>
</div>

</div>

</div>

{/* PHILOSOPHY */}
<div className="mt-16 grid md:grid-cols-2 gap-10 items-center">

<div className="relative h-[220px] rounded-2xl overflow-hidden">
<Image src="/images/about3.png" alt="Philosophy" fill className="object-cover"/>
</div>

<div>
<h3 className="text-xl font-semibold mb-3">
Our Philosophy
</h3>

<p className="text-black/70">
We create functional, aesthetic and high-performance workspaces 
that elevate business environments.
</p>
</div>

</div>



</Container>
</section>

    {/* ================= PREMIUM SERVICES ================= */}
<section className="py-28 bg-[#f8f6f2]">
<Container>

<h2 className="text-4xl text-center mb-16 font-bold tracking-tight">
Our Services
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

{services.map((s,i)=>(

<div key={i} className="group relative">

{/* IMAGE */}
<div className="relative h-[200px] rounded-2xl overflow-hidden">

<Image 
src={s.img} 
alt={s.title} 
fill
className="object-cover group-hover:scale-110 transition duration-700"
/>

{/* DARK OVERLAY */}
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500" />

</div>

{/* FLOAT CARD */}
<div className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-[85%] bg-white/90 backdrop-blur-lg shadow-xl rounded-xl px-4 py-3 text-center group-hover:-translate-y-2 transition duration-500">

<h3 className="text-sm font-semibold tracking-wide">
{s.title}
</h3>

</div>

</div>

))}

{/* ================= PREMIUM CTA CARD ================= */}
<div className="group relative h-[200px] rounded-2xl bg-gradient-to-br from-[#c8a951] to-[#a8893d] flex items-center justify-center cursor-pointer overflow-hidden">

{/* GLOW EFFECT */}
<div className="absolute w-[200%] h-[200%] bg-white/10 rotate-45 group-hover:translate-x-full transition duration-700"></div>

<div className="relative text-center text-white">

<p className="text-lg font-semibold tracking-wide">
Explore More
</p>

<p className="text-sm mt-1 opacity-80">
All Services →
</p>

</div>

</div>

</div>

</Container>
</section>

    {/* ================= PROJECTS ================= */}
    <section className="py-28 bg-[#f6f1ea]">
    <Container>

    <h2 className="text-4xl text-center mb-16 font-bold">
    Our Projects
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

    {["project1.png","project2.png","project3.png"].map((img,i)=>(

    <div key={i} className="relative h-[260px] rounded-2xl overflow-hidden group">

    <Image 
    src={`/images/${img}`} 
    alt="project"
    fill
    sizes="(max-width:768px) 100vw, 33vw"
    className="object-cover group-hover:scale-110 transition duration-700"
    />

    </div>

    ))}

    </div>

    </Container>
    </section>

    {/* ================= CTA ================= */}
    <section className="py-20 text-center bg-black text-white">

    <h2 className="text-3xl font-bold">
    Let’s Build Your Next Project
    </h2>

    <p className="mt-4 text-white/70">
    Get in touch with our team today
    </p>

    <button className="mt-6 px-6 py-3 bg-[#c8a951] text-black rounded-full">
    Contact Us →
    </button>

    </section>

    {/* ================= LOCATIONS ================= */}
    <section className="py-24 bg-white">
    <Container>

    <h2 className="text-3xl text-center mb-10 font-bold">
    Our Presence
    </h2>

    <div className="grid md:grid-cols-4 gap-6 text-center">

    {["Delhi","Gurgaon","Noida","Mumbai"].map((c,i)=>(

    <p key={i} className="font-medium hover:text-[#c8a951] transition">
    {c}
    </p>

    ))}

    </div>

    </Container>
    </section>

    </MainLayout>
    );
    }
