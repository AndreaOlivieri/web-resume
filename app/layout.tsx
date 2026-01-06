import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { resumeData } from "../data/data";
import enTranslations from "../data/en.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Helper to accumulate all skills for keywords
const getAllSkills = () => {
  const {
    industry,
    frontend,
    backend,
    database,
    mobile,
    languages,
    tools,
    soft,
  } = resumeData.skills;
  return [
    ...industry.items,
    ...frontend.items,
    ...backend.items,
    ...(database.items || []),
    ...(mobile.items || []),
    ...(languages.items || []),
    ...(tools.items || []),
    ...(soft.items || []),
  ].filter((item) => typeof item === "string" && !item.startsWith("skills."));
  // Note: Filtering out translation keys if any remain, though current data.ts has mostly raw strings for skills except industry categories
};

const title = `${resumeData.header.name} - ${enTranslations.header.title}`;
const description = Array.isArray(enTranslations.summary)
  ? enTranslations.summary.join(" ")
  : "Software Engineer";

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${resumeData.header.name}`,
  },
  description: description,
  keywords: [
    resumeData.header.name,
    "Software Engineer",
    "Tech Lead",
    ...getAllSkills(),
  ],
  authors: [{ name: resumeData.header.name }],
  creator: resumeData.header.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_URL || "https://andrea-olivieri.vercel.app",
    title: title,
    description: description,
    siteName: `${resumeData.header.name} Resume`,
    images: [
      {
        url: "/assets/profile_image.jpeg",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: ["/assets/profile_image.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
