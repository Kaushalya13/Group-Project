// src/app/layout.tsx
import type { Metadata } from "next";
import { Lato, Lora } from "next/font/google"; 
import "./globals.css";

// Define the font loaders
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato", // Define CSS variable
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-lora", // Define CSS variable
});


export const metadata: Metadata = {
  title: "Unseen Kalutara",
  description: "Discover the soulful sanctuary of Kalutara's hidden gems. A journey into nature, culture, and wellness awaits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Attach font variables to the body */}
      <body className={`${lato.variable} ${lora.variable} font-lato bg-light-bg text-dark-text`}>{children}</body>
    </html>
  );
}