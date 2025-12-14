import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-10 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-12 md:px-16">
        {/* Top Border Line */}
        <div className="w-full h-px bg-white/20 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/colored-logo.png"
              alt="Sketch Robotics"
              width={275}
              height={89}
              className="h-[60px] md:h-[75px] w-auto"
            />
          </div>

          {/* Copyright */}
          <p className="text-center text-xs md:text-sm text-white/70 font-normal tracking-[1px] md:text-right">
            © 2025 Sketch Robotics | All Rights Reserved
          </p>
        </div>

        {/* Bottom Border Line */}
        <div className="w-full h-px bg-white/20 mt-8" />
      </div>
    </footer>
  );
}
