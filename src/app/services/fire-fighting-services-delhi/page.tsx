import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Fire Fighting System Contractor in Delhi NCR | Fire Safety Services | ITSS",

  description:
    "ITSS is a leading fire fighting contractor in Delhi NCR providing fire safety systems, fire alarm installation, sprinkler systems and fire protection services for commercial and industrial projects.",

  keywords: [
    "fire fighting contractor Delhi NCR",
    "fire safety system installation",
    "fire alarm system contractor",
    "sprinkler system installation",
    "fire protection services India",
  ],
};

export default function Page() {
  return <PageClient />;
}
