import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });

export const metadata: Metadata = {
  title: "Syed Sadiq — Senior Software Developer",
  description:
    "Senior Software Developer | Full-Stack Engineer | Node.js + React | AI Enthusiast based in Bengaluru, India.",
  keywords: ["Syed Sadiq", "sadiqsyeds", "Software Developer", "Full-Stack", "Node.js", "React", "GraphQL"],
  authors: [{ name: "Syed Sadiq" }],
  openGraph: {
    title: "Syed Sadiq — Senior Software Developer",
    description: "Senior Software Developer | Full-Stack Engineer | AI Enthusiast",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
