import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dog & Partridge | Irish Pub ☘️ Sheffield",
  description: "Irish owned, cosy, dog friendly & Irish Free House in Sheffield city centre. Home of the Holy Trinity of Beamish, Guinness & Murphy's. Best Guinness in Sheffield.",
  keywords: ["Irish Pub", "Sheffield", "Guinness", "Dog Friendly", "City Centre", "Beamish", "Murphy's"],
  openGraph: {
    title: "Dog & Partridge | Irish Pub ☘️ Sheffield",
    description: "Irish owned, cosy, dog friendly & Irish Free House in Sheffield city centre.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${sourceSans.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
