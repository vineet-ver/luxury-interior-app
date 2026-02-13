import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "ITSS | Enterprise Solutions",
  description:
    "Pioneering the future of total office automation and enterprise intelligence.",
  icons: {
  icon: [
    { url: "/favicon.ico" },
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
  ],
  apple: [
    { url: "/apple-touch-icon.png", sizes: "180x180" },
  ],
},
manifest: "/site.webmanifest",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "India Technical Solution Services",
      alternateName: "ITSS",
      url: "https://www.itss.co.in",
      logo: "https://www.itss.co.in/logo.png",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.facebook.com/itss",
        "https://www.instagram.com/itss",
        "https://www.linkedin.com/company/itss",
      ],
    }),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-background text-foreground selection:bg-metallic-gold selection:text-black">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        {/* Google Analytics */}
        <GoogleAnalytics gaId="G-WBSCF7C86T" />
      </body>
    </html>
  );
}
