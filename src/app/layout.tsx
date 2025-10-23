import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../layout/Navbar";
import Footer from "@/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import QueryProvider from "@/lib/QueryProvider";
import LayoutWrapper from "@/layout/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "[solutions]n ",
  description: "Empowering Businesses with Tailored Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <ThemeProvider
            defaultTheme="system"
            storageKey="power-solutions-theme"
          >
            <Navbar />
            <LayoutWrapper>{children}</LayoutWrapper>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
