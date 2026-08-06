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
  title: "Novel Suite — Luxury Hotel in Jos",
  description:
    "Experience comfort in the heart of Jos. Elegant rooms, exceptional service, and a peaceful atmosphere for business and leisure travelers.",
  keywords: "hotel Jos, luxury hotel Nigeria, Novel Suite, accommodation Jos Plateau",
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