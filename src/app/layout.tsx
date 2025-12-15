import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ITSS | Enterprise Solutions",
  description: "Pioneering the future of total office automation and enterprise intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased min-h-screen flex flex-col bg-obsidian-950 text-white selection:bg-metallic-gold selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
