import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Xceptional Place Hotel | Jos, Plateau State",
  description:
    "Website concept for Xceptional Place Hotel, Atiku Junction, Rayfield, Jos, Plateau State.",
  keywords: "Xceptional Place Hotel, Jos, Plateau State, hotel concept",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#0B0B0B] text-white antialiased">{children}</body>
    </html>
  );
}