// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unseen Kalutara | Breathe. Explore. Heal.",
  description: "Discover the soulful sanctuary of Kalutara's hidden gems. A journey into nature, culture, and wellness awaits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Lora:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-lato bg-light-bg text-dark-text">{children}</body>
    </html>
  );
}