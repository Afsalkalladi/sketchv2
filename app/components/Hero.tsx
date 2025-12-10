import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Robotics lab background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-24">
          <div className="max-w-xl text-left">
            {/* Tagline */}
            <p className="text-gray-400 uppercase tracking-widest text-sm mb-4">
              Everything Starts From a Sketch
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl leading-tight text-white">
              <span className="block font-normal">Everything</span>
              <span className="block font-semibold">Starts</span>
              <span className="block font-normal">From a Sketch</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-md text-sm md:text-base text-gray-200">
              Transforming ideas into reality through cutting-edge robotics and
              AI solutions, engineered with precision and vision.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-start sm:justify-center gap-4 mt-8">
              <button className="px-8 py-3 bg-white text-black font-semibold uppercase tracking-wider hover:bg-gray-200 transition-colors flex items-center gap-2">
                Explore Products
                <ArrowRight size={18} />
              </button>
              <button className="px-8 py-3 border border-white text-white font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
