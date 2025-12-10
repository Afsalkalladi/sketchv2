import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Robotics lab background"
          fill
          priority
          className="object-cover opacity-60"
        />
        {/* Stronger gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="mx-auto flex max-w-6xl items-center px-6 py-24">
          <div className="max-w-2xl text-left">
            {/* Tagline */}
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
              Everything Starts From a Sketch
            </p>

            {/* Main Heading - Uppercase per rules */}
            <h1 className="text-5xl font-bold uppercase leading-none tracking-tight text-white md:text-7xl">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Everything
              </span>
              <span className="block">Starts</span>
              <span className="block">From a Sketch</span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-lg text-base leading-relaxed text-gray-300 md:text-lg">
              Transforming ideas into reality through cutting-edge robotics and
              AI solutions, engineered with precision and vision.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button className="flex items-center justify-center gap-2 bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-transform hover:scale-105">
                Explore Products
                <ArrowRight size={16} />
              </button>
              <button className="px-8 py-4 text-sm font-bold uppercase tracking-widest text-white ring-1 ring-white/30 transition-colors hover:bg-white/10">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
