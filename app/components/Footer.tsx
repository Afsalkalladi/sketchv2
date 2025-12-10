export default function Footer() {
  return (
    <footer className="bg-[#e8e8e8]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Brand */}
          <div className="flex flex-col leading-none text-zinc-800">
            <span className="text-[10px] font-light tracking-[0.3em] uppercase">
              Sketch
            </span>
            <span className="text-sm font-medium tracking-[0.2em] uppercase">
              Robotics
            </span>
          </div>

          {/* Copyright */}
          <p className="text-center text-xs text-zinc-500 font-light md:text-right">
            © 2025 Sketch Robotics | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
