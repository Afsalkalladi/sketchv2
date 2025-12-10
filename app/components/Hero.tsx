import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Tagline */}
        <p className="text-gray-400 uppercase tracking-widest text-sm mb-4">
          Everything Starts From a Sketch
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight mb-6">
          Sketch Robotics
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Building the future with the &quot;Make in India&quot; spirit. 
          Solving real-world problems through innovative robotics solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3 bg-white text-black font-semibold uppercase tracking-wider hover:bg-gray-200 transition-colors flex items-center gap-2">
            Explore Products
            <ArrowRight size={18} />
          </button>
          <button className="px-8 py-3 border border-white text-white font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
