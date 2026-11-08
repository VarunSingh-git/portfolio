import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

const caveat = Caveat({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Varun Singh | MERN Stack Developer",
  description:
    "Personal portfolio of Varun Singh — Full-Stack Developer specializing in resilient MERN architectures, idempotent RESTful APIs, relational data modeling, and defensive backend engineering.",
  keywords: [
    "Varun Singh",
    "MERN Stack Developer",
    "Backend Engineer",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Next.js",
    "REST APIs"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} ${caveat.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen flex flex-col bg-[#08120E] text-[#F5ECDD] antialiased selection:bg-[#EFA12D] selection:text-[#08120E]">
        {children}
      </body>
    </html>
  );
}
