import { notFound } from "next/navigation";
import type { Metadata } from "next";

const allowedCities = [
  "delhi",
  "mumbai",
  "gurgaon",
  "noida",
  "bangalore",
  "jaipur",
];

type Props = {
  params: Promise<{ city: string }>;
};

// ✅ Dynamic Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const city = resolvedParams.city.toLowerCase();

  if (!allowedCities.includes(city)) return {};

  const cityName =
    city.charAt(0).toUpperCase() + city.slice(1);

  return {
    title: `Commercial Interior Designer in ${cityName} | ITSS`,
    description: `ITSS provides turnkey commercial interior design services in ${cityName}.`,
  };
}

// ✅ Page Component
export default async function CityPage({ params }: Props) {
  const resolvedParams = await params;
  const city = resolvedParams.city.toLowerCase();

  if (!allowedCities.includes(city)) {
    notFound();
  }

  const cityName =
    city.charAt(0).toUpperCase() + city.slice(1);

  return (
    <div style={{ padding: "120px", textAlign: "center" }}>
      <h1>Commercial Interior Designer in {cityName}</h1>
      <p>
        ITSS offers turnkey commercial interior solutions in {cityName}.
      </p>
    </div>
  );
}
