import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 text-gray-300 md:flex-row">
          {/* Brand */}
          <div className="flex flex-col leading-none text-gray-100">
            <span className="text-xs tracking-[0.35em] uppercase">
              Sketch
            </span>
            <span className="text-lg font-semibold tracking-[0.35em] uppercase">
              Robotics
            </span>
          </div>

          {/* Copyright */}
          <p className="text-center text-[11px] text-gray-400 md:text-right">
            © 2025 Sketch Robotics | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
