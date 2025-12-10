export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c]">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Brand */}
          <div className="flex flex-col leading-none text-white">
            <span className="text-[9px] tracking-[0.3em] uppercase opacity-80">
              Sketch
            </span>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase">
              Robotics
            </span>
          </div>

          {/* Copyright */}
          <p className="text-center text-[10px] text-gray-400 md:text-right">
            © 2025 Sketch Robotics | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
