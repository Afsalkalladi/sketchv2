import Image from "next/image";

export default function FutureSection() {
  return (
    <section
      id="solution"
      // Kept bg-black, removed overlays that were washing it out
      className="bg-black py-24 md:py-32 relative overflow-hidden min-h-[867px]"
    >
      {/* REMOVED: The top dark gradient and the light ambiance gradient 
         were deleted here to ensure the background remains pure solid black.
      */}

      <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Left Column - Text */}
          <div className="md:w-1/2 pt-8">
            <h2
              className="text-4xl md:text-5xl font-light text-white leading-[59.04px] tracking-[4px]"
              style={{ fontFamily: "'Unbounded', sans-serif" }}
            >
              FUTURE
              <br />
              BY DESIGN
            </h2>

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

            <button
              className="mt-10 h-9 px-6 rounded-full bg-gray-600/80 opacity-70 text-white text-sm font-light leading-6 tracking-widest transition-all hover:opacity-90"
              style={{ fontFamily: "'Unbounded', sans-serif" }}
            >
              Get started
            </button>
          </div>

          {/* Right Column - Robotic Arm Image & Dots */}
          <div className="md:w-1/2 flex justify-center md:justify-end relative">
            {/* --- THE DOT PATTERN --- */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: "600px",
                height: "600px",
                right: "-50px",
                top: "-50px",
                backgroundImage:
                  "radial-gradient(circle, rgba(255, 255, 255, 0.3) 1.5px, transparent 2px)",
                backgroundSize: "24px 24px",
                maskImage:
                  "radial-gradient(circle, black 40%, transparent 70%)",
                WebkitMaskImage:
                  "radial-gradient(circle, black 40%, transparent 70%)",
                zIndex: 0,
              }}
            />
            {/* --------------------------- */}

            <div className="relative w-[400px] h-[500px] md:w-[585px] md:h-[732px] z-10">
              <Image
                src="/images/robotic-arm.svg"
                alt="Robotic arm"
                fill
                className="object-contain relative"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
