import Image from "next/image";

export default function GlobalSection() {
  return (
    <section className="bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col gap-12 md:flex-row md:items-center">
          {/* Left Column - Text */}
          <div className="md:w-1/2">
            <div className="text-xs font-medium uppercase tracking-[0.35em] text-gray-500 space-y-1">
              <p>SHAPING ROBOTICS ACROSS</p>
              <p>THE CONTINENTS</p>
            </div>

            <h2 className="mt-8 text-4xl md:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
              <span className="block">From India to</span>
              <span className="block text-gray-500">the World</span>
            </h2>

            <p className="mt-6 max-w-md text-base text-gray-300 leading-relaxed">
              Expanding India&apos;s engineering excellence to the global
              robotics ecosystem. We are bridging gaps and creating value
              through innovation.
            </p>
          </div>

          {/* Right Column - World Map Card */}
          <div className="relative flex-1 md:w-1/2 mt-8 md:mt-0">
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8">
              <Image
                src="/images/world-map.png"
                alt="World map showing global reach"
                width={800}
                height={400}
                className="mx-auto h-auto w-full object-contain opacity-80 mix-blend-screen"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
