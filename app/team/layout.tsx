import type { Metadata } from "next";
import { TeamPageJsonLd } from "../components/StructuredData";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the Sketch Robotics team — WorldSkills global rankers, ERC contributors, and CUSAT alumni. Led by CEO Muhammed Faisal P K, COO Romal Josbin, and Co-Founder Muhammed Siyad P.",
  keywords: [
    "Sketch Robotics team",
    "robotics founders India",
    "WorldSkills India",
    "CUSAT robotics",
    "Muhammed Faisal P K",
    "Romal Josbin",
    "Muhammed Siyad P",
    "robotics engineers Kochi",
    "ERC 2024",
    "IndiaSkills 2022",
  ],
  alternates: {
    canonical: "https://sketchrobotics.in/team",
  },
  openGraph: {
    title: "Our Team | Sketch Robotics",
    description:
      "Meet the WorldSkills rankers and CUSAT alumni behind Sketch Robotics — innovating in robotics and AI from Kochi, India.",
    url: "https://sketchrobotics.in/team",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sketch Robotics Team",
      },
    ],
  },
  twitter: {
    title: "Our Team | Sketch Robotics",
    description:
      "Meet the WorldSkills rankers and CUSAT alumni behind Sketch Robotics — innovating in robotics and AI from Kochi, India.",
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TeamPageJsonLd />
      {children}
    </>
  );
}
