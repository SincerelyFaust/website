import type { Metadata } from "next";
import { DM_Sans, IBM_Plex_Mono } from "next/font/google";
import ThemeProvider from "./components/theme-provider";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
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
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/images/favicon/favicon.ico" },
      {
        url: "/images/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [{ url: "/images/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${ibmPlexMono.variable} min-h-svh bg-[#fafafa] font-sans text-zinc-950 antialiased dark:bg-[#101010] dark:text-zinc-100`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
