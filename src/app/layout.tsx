import type { Metadata } from "next";
import "./globals.css";
import { NextThemeProvider } from "@/lib/providers/next-theme-provider";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage", // renamed, no longer collides
  weight: ["600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "NoteMind",
  description: "A simple landing page for capturing and organizing notes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jakarta.variable} ${bricolage.variable}`}
    >
      <body className="font-sans bg-background text-foreground antialiased">
        <NextThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </NextThemeProvider>
      </body>
    </html>
  );
}
