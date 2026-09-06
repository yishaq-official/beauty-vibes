import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://beautyvibes.et"),
  title: "BeautyVibes | Luxury Beauty Salon & Certified Academy",
  description:
    "Premium personalized at-home makeup services and certified professional beauty training academy in Addis Ababa, Ethiopia.",
  keywords: [
    "Beauty Salon",
    "Makeup Academy",
    "Bridal Makeup",
    "Beauty Training",
    "Addis Ababa",
    "Ethiopia",
  ],
  icons: {
    icon: "/IMG_20260226_230531_939.jpg",
  },
  openGraph: {
    title: "BeautyVibes | Luxury Beauty Salon & Certified Academy",
    description:
      "Premium personalized at-home makeup services and certified professional beauty training academy.",
    images: ["/IMG_20260226_230531_939.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="bg-[#0e0e0e] text-gray-200 min-h-screen font-sans selection:bg-rosegold selection:text-white flex flex-col justify-between">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
