import Image from "next/image";

export default function FutureSection() {
  return (
    <section
      id="solution"
      className="bg-black py-24 md:py-32 relative overflow-hidden min-h-[867px]"
    >
      {/* Gradient overlays from Figma */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Left Column - Text */}
          <div className="md:w-1/2 pt-8">
            {/* Heading – Figma: text-5xl, font-light, tracking-[4px], leading-[59.04px] */}
            <h2
              className="text-4xl md:text-5xl font-light text-white leading-[59.04px] tracking-[4px]"
              style={{ fontFamily: "'Unbounded', sans-serif" }}
            >
              FUTURE
              <br />
              BY DESIGN
            </h2>

            {/* Description – Figma: text-neutral-400, text-sm, font-light, leading-6, tracking-widest */}
            <div
              className="mt-10 text-neutral-400 text-sm font-light leading-6 tracking-widest max-w-[610px]"
              style={{ fontFamily: "'Unbounded', sans-serif" }}
            >
              <p>
                We believe the future belongs to those who build it. Driven by
                the &quot;Make in India&quot; spirit, our mission is to design
                and develop innovative robotic solutions that solve real-world
                problems.
              </p>
              <p className="mt-4">
                Founded by a passionate team from CUSAT, we focus on turning
                bold ideas into real-world solutions that simplify lives and
                enhance productivity. With this vision, we are committed to
                positioning India as a benchmark in the global robotics
                revolution.
              </p>
            </div>

            {/* Get Started Button – Figma: bg-gray-600/80, rounded-[130.43px], text-sm, tracking-widest */}
            <button
              className="mt-10 h-9 px-6 rounded-full bg-gray-600/80 opacity-70 text-white text-sm font-light leading-6 tracking-widest transition-all hover:opacity-90"
              style={{ fontFamily: "'Unbounded', sans-serif" }}
            >
              Get started
            </button>
          </div>

          {/* Right Column - Robotic Arm Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-[400px] h-[500px] md:w-[585px] md:h-[732px]">
              {/* Decorative circle behind */}
              <div className="absolute -top-14 -left-10 w-[668px] h-[668px] opacity-20 rounded-full border border-white/10" />
              <Image
                src="/images/robotic-arm.svg"
                alt="Robotic arm"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
