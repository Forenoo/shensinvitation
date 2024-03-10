import type { Metadata } from "next";
import "./globals.css";

import { Raleway, Inter } from "next/font/google";
import { prisma } from "@/utils/prisma";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shensinvitation - Wedding Invitation Solution",
  description:
    "Create and customize your dream wedding invitation with Shensinvitation. Choose from a variety of elegant designs and personalize every detail. Share your special day with loved ones in style.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${raleway.variable} overflow-x-hidden`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
