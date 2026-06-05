import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ease E-Commerce & Business Consultants | Najam Ali",
  description:
    "Najam Ali — full-stack eCommerce consultant specializing in Amazon, Walmart, eBay, and Shopify. 4+ years experience, 50+ clients served, $10M+ revenue generated.",
  keywords: [
    "ecommerce consultant",
    "Amazon seller",
    "Walmart marketplace",
    "eBay store",
    "Shopify expert",
    "Najam Ali",
    "Ease Ecommerce",
    "business consultant",
    "PPC management",
    "marketplace growth",
  ],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Ease E-Commerce & Business Consultants | Najam Ali",
    description:
      "Premium eCommerce consultancy. Amazon, Walmart, eBay, Shopify — we grow your marketplace presence.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${inter.variable}`}>
      <body className="antialiased">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
