import type { Metadata } from "next";
import { SolutionsPageJsonLd } from "../components/StructuredData";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore Sketch Robotics' solutions: ROS 2 autonomy framework, AI & intelligent systems, embedded real-time control systems, and edge intelligence for cutting-edge robotics automation in India.",
  keywords: [
    "robotics solutions India",
    "ROS 2 autonomy",
    "AI robotics",
    "embedded systems India",
    "edge computing robotics",
    "LiDAR SLAM",
    "computer vision",
    "robotic automation",
    "autonomous navigation",
    "motion control systems",
  ],
  alternates: {
    canonical: "https://sketchrobotics.in/solutions",
  },
  openGraph: {
    title: "Solutions | Sketch Robotics",
    description:
      "ROS 2 autonomy, AI systems, embedded control, and edge intelligence — robotics solutions from Kochi, India.",
    url: "https://sketchrobotics.in/solutions",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sketch Robotics Solutions",
      },
    ],
  },
  twitter: {
    title: "Solutions | Sketch Robotics",
    description:
      "ROS 2 autonomy, AI systems, embedded control, and edge intelligence — robotics solutions from Kochi, India.",
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SolutionsPageJsonLd />
      {children}
    </>
  );
}
