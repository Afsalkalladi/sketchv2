import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sketch Robotics | Everything Starts From a Sketch",
  description: "Building the future with the Make in India spirit. Solving real-world problems through innovative robotics solutions. Founded by a team from CUSAT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${unbounded.variable} font-[family-name:var(--font-unbounded)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
