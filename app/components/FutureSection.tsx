import Image from "next/image";

export default function FutureSection() {
  return (
    <section id="solution" className="bg-white py-20 md:py-28 relative overflow-hidden">
      {/* Decorative Wave Lines Background - subtle */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none opacity-40">
        <svg
          className="w-full h-48"
          viewBox="0 0 1200 150"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(10)].map((_, i) => (
            <path
              key={i}
              d={`M0 ${30 + i * 12} Q 300 ${60 + i * 8}, 600 ${30 + i * 12} T 1200 ${30 + i * 12}`}
              stroke="#d1d5db"
              strokeWidth="1"
              fill="none"
            />
          ))}
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
          {/* Left Column - Text */}
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
              Future By Design
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-500">
              <p>
                We believe the future belongs to those who build it. Driven by the
                &apos;Make in India&apos; spirit, our mission is to design and develop
                innovative robotic solutions that solve real-world problems.
              </p>

              <p>
                Founded by a passionate team from CUSAT, we focus on turning bold
                ideas into real-world solutions that simplify lives and enhance
                productivity. With this vision, we are committed to positioning
                India as a benchmark in the global robotics revolution.
              </p>
            </div>
          </div>

          {/* Right Column - Wave Sphere Graphic */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <Image
                src="/images/wave-sphere.svg"
                alt="Abstract wave sphere"
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
