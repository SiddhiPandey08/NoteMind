import type { Metadata } from "next";
import "./globals.css";
import { NextThemeProvider } from "@/lib/providers/next-theme-provider";

export const metadata: Metadata = {
  title: "Note Mind",
  description: "A simple landing page for capturing and organizing notes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        <NextThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </NextThemeProvider>
      </body>
    </html>
  );
}
