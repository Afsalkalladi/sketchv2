import Image from "next/image";

export default function GlobalSection() {
  return (
    <section className="bg-[#fafafa] py-16 md:py-24 relative overflow-hidden">
      {/* Top Decorative Wave Lines */}
      <div className="absolute top-0 left-0 w-full pointer-events-none opacity-30">
        <svg
          className="w-full h-24"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(6)].map((_, i) => (
            <path
              key={i}
              d={`M0 ${10 + i * 10} Q 300 ${40 + i * 5}, 600 ${10 + i * 10} T 1200 ${10 + i * 10}`}
              stroke="#9ca3af"
              strokeWidth="1"
              fill="none"
            />
          ))}
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* World Map - Dotted Style */}
        <div className="relative w-full flex justify-center py-8">
          <div className="relative w-full max-w-4xl h-56 md:h-80">
            <Image
              src="/images/world-map-dots.svg"
              alt="World map showing global presence"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Decorative Wave Lines */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none opacity-30">
        <svg
          className="w-full h-24"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(6)].map((_, i) => (
            <path
              key={i}
              d={`M0 ${10 + i * 10} Q 300 ${40 + i * 5}, 600 ${10 + i * 10} T 1200 ${10 + i * 10}`}
              stroke="#9ca3af"
              strokeWidth="1"
              fill="none"
            />
          ))}
        </svg>
      </div>
    </section>
  );
}
