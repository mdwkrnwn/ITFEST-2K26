import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "UFinder - Platform Pencarian UMKM Berbasis Lokasi",
  description:
    "Temukan UMKM terdekat, jelajahi berbagai kategori usaha, dan bantu pelaku usaha lokal berkembang melalui platform digital berbasis lokasi.",
  keywords: [
    "UMKM",
    "LBS",
    "Location Based Service",
    "UMKM Indonesia",
    "UMKM Digital",
    "Direktori UMKM",
    "Pencarian UMKM",
    "Usaha Lokal",
    "Produk Lokal",
    "UFinder"
  ],
  authors: [{ name: "UFinder" }],
  openGraph: {
    title: "UFinder - Platform Pencarian UMKM Berbasis Lokasi",
    description:
      "Temukan UMKM terdekat dan dukung pertumbuhan ekonomi lokal melalui teknologi berbasis lokasi.",
    type: "website",
  },
  icons: {
    icon: "/log.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-screen bg-[#F4F3EE] antialiased">
        {children}
      </body>
    </html>
  );
}