import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marcelo Eduardo | Full Stack Developer",
  description:
    "Full Stack Developer with 8 years of experience in software engineering. Expert in Node.js, React, Next.js, Python automation, and Open Source contributions.",
  keywords: [
    "Full Stack Developer",
    "Node.js",
    "React",
    "Next.js",
    "Python",
    "TypeScript",
    "Automation",
    "Open Source",
  ],
  authors: [{ name: "Marcelo Eduardo da Cunha Baptista" }],
  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  );
}
