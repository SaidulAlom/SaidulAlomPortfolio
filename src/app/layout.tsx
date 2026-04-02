import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import ScrollUpButton from "../components/ScrollUpButton";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://saidulalom.com'),
  title: {
    default: "Saidul Alom | Full Stack Developer",
    template: "%s | Saidul Alom"
  },
  description: "Portfolio of Saidul Alom, a Full Stack Developer specializing in React, Next.js, Node.js, and modern web architectures.",
  keywords: ["Saidul Alom", "Full Stack Developer", "Web Developer", "React Developer", "Next.js", "Portfolio", "Software Engineer"],
  authors: [{ name: "Saidul Alom" }],
  creator: "Saidul Alom",
  openGraph: {
    title: "Saidul Alom | Full Stack Developer",
    description: "Portfolio of Saidul Alom, a Full Stack Developer specializing in React, Next.js, Node.js, and modern web architectures.",
    url: 'https://saidulalom.com',
    siteName: 'Saidul Alom Portfolio',
    images: [
      {
        url: '/SaidulAlomLogo.png',
        width: 800,
        height: 600,
        alt: 'Saidul Alom Logo'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saidul Alom | Full Stack Developer',
    description: "Portfolio of Saidul Alom, a Full Stack Developer.",
    creator: '@S_Alom_83',
    images: ['/SaidulAlomLogo.png'],
  },
  icons: {
    icon: "/SaidulAlomLogo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} antialiased selection:bg-[#a3ff33] selection:text-black`}
      >
        {children}
        <Analytics />
        <ScrollUpButton />
      </body>
    </html>
  );
}
