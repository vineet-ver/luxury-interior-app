import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ITSS | Enterprise Solutions",
  description: "Pioneering the future of total office automation and enterprise intelligence.",
};

import { ThemeProvider } from "@/components/providers/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased min-h-screen flex flex-col bg-white dark:bg-obsidian-950 text-gray-900 dark:text-white selection:bg-metallic-gold selection:text-black`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
