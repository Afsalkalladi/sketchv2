import type { Metadata, Viewport } from "next";
import { Unbounded } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { OrganizationJsonLd, WebsiteJsonLd, FAQJsonLd } from "./components/StructuredData";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const SITE_URL = "https://sketchrobotics.in";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sketch Robotics | Everything Starts From a Sketch",
    template: "%s | Sketch Robotics",
  },
  description:
    "Sketch Robotics — Building the future with the Make in India spirit. Innovative robotics, AI & automation solutions. ROS 2, embedded systems, edge intelligence. Founded by WorldSkills rankers from CUSAT, Kochi.",
  keywords: [
    "Sketch Robotics",
    "robotics company India",
    "robotics solutions Kochi",
    "ROS 2 development",
    "AI robotics India",
    "automation solutions",
    "embedded systems",
    "edge computing robotics",
    "Make in India robotics",
    "CUSAT robotics",
    "WorldSkills India robotics",
    "autonomous robots",
    "LiDAR SLAM",
    "computer vision India",
    "robotic automation India",
    "Sketch Robotics Pvt Ltd",
    "industrial automation India",
    "robotics startup India",
    "robotics startup Kerala",
    "mobile robotics India",
  ],
  authors: [{ name: "Sketch Robotics", url: SITE_URL }],
  creator: "Sketch Robotics",
  publisher: "Sketch Robotics Pvt Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Sketch Robotics",
    title: "Sketch Robotics | Everything Starts From a Sketch",
    description:
      "Building the future with the Make in India spirit. Innovative robotics, AI & automation solutions from Kochi, India. Founded by WorldSkills rankers from CUSAT.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sketch Robotics - Everything Starts From a Sketch",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sketch Robotics | Everything Starts From a Sketch",
    description:
      "Building the future with the Make in India spirit. Innovative robotics, AI & automation solutions from Kochi, India.",
    site: "@sketchrobotics",
    creator: "@sketchrobotics",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  category: "technology",
  classification: "Robotics & AI",
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Kochi",
    "geo.position": "9.9312;76.2673",
    ICBM: "9.9312, 76.2673",
    "revisit-after": "7 days",
    rating: "general",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/colored-logo.png" />
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <FAQJsonLd />
      </head>
      <body
        className={`${unbounded.variable} font-[family-name:var(--font-unbounded)] antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
