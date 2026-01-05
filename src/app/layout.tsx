import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ITSS | Enterprise Solutions",
  description: "Pioneering the future of total office automation and enterprise intelligence.",
};

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased min-h-screen flex flex-col bg-background text-foreground selection:bg-metallic-gold selection:text-black`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <GoogleAnalytics gaId="G-WBSCF7C86T" />
      </body>
    </html>
  );
}
