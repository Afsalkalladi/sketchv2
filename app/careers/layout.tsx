import type { Metadata } from "next";
import { CareersPageJsonLd } from "../components/StructuredData";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Sketch Robotics — open positions for Robotics Hardware Engineers, Software Engineers, Mechanical Engineers, and Marketing Specialists. Remote and Kochi-based opportunities.",
  keywords: [
    "robotics jobs India",
    "robotics engineer jobs Kochi",
    "embedded engineer jobs",
    "AI engineer jobs India",
    "Sketch Robotics careers",
    "robotics startup jobs",
    "remote robotics jobs India",
    "mechanical engineer robotics",
    "ROS 2 developer jobs",
  ],
  alternates: {
    canonical: "https://sketchrobotics.in/careers",
  },
  openGraph: {
    title: "Careers | Sketch Robotics",
    description:
      "Join the team behind innovative robotics solutions. Open positions in engineering and marketing. Remote & Kochi-based.",
    url: "https://sketchrobotics.in/careers",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Careers at Sketch Robotics",
      },
    ],
  },
  twitter: {
    title: "Careers | Sketch Robotics",
    description:
      "Join the team behind innovative robotics solutions. Open positions in engineering and marketing. Remote & Kochi-based.",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CareersPageJsonLd />
      {children}
    </>
  );
}
