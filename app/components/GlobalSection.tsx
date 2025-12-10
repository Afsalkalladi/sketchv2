import Image from "next/image";

export default function GlobalSection() {
  return (
    <section className="bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex flex-col gap-10 md:flex-row md:items-center">
          {/* Left Column - Text */}
          <div className="md:w-1/2">
            <div className="text-xs uppercase tracking-[0.35em] text-gray-400 space-y-1">
              <p>SHAPING ROBOTICS ACROSS</p>
              <p>THE CONTINENTS</p>
            </div>

            <h2 className="mt-6 text-2xl font-semibold uppercase tracking-[0.25em] text-white">
              <span className="block">From India to</span>
              <span className="block">the World</span>
            </h2>

            <p className="mt-4 max-w-md text-sm text-gray-200">
              Expanding India&apos;s engineering excellence to the global
              robotics ecosystem.
            </p>
          </div>

          {/* Right Column - World Map Card */}
          <div className="relative flex-1 md:w-1/2">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-tr from-white/5 via-white/10 to-transparent p-4">
              <Image
                src="/images/world-map.png"
                alt="World map showing global reach"
                width={640}
                height={256}
                className="mx-auto h-64 w-auto object-contain opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
