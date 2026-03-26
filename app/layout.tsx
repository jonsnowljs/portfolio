import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jiasheng Lu — Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Node.js, and modern web technologies. Building elegant digital experiences.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Node.js",
    "TypeScript",
    "Portfolio",
    "Jiasheng Lu",
  ],
  authors: [{ name: "Jiasheng Lu" }],
  creator: "Jiasheng Lu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jonsnowljs.github.io/portfolio/",
    title: "Jiasheng Lu — Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Node.js, and modern web technologies.",
    siteName: "Jiasheng Lu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jiasheng Lu — Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Node.js, and modern web technologies.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
