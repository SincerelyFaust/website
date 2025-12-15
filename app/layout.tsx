import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marin Heđeš",
  description: "Front-end and mobile developer",
  keywords: [
    "portfolio",
    "marin heđeš",
    "faust",
    "personal website",
    "sincerelyfaust",
    "founder",
    "developer",
    "frontend developer",
    "mobile developer",
    "software engineer",
  ],
  alternates: {
    canonical: "https://www.marinhedes.com",
  },
  openGraph: {
    type: "website",
    url: "https://www.marinhedes.com",
    title: "Marin Heđeš",
    siteName: "Marin Heđeš",
    description: "Front-end and mobile developer",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/44751736?v=4",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: "Marin Heđeš",
    statusBarStyle: "default",
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
