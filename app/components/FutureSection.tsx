import Image from "next/image";
import { Cpu, Zap, Settings } from "lucide-react";

export default function FutureSection() {
  const features = [
    {
      icon: Cpu,
      title: "Advanced AI",
      description: "Cutting-edge artificial intelligence powering our robotic solutions.",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized systems delivering exceptional speed and efficiency.",
    },
    {
      icon: Settings,
      title: "Precision Engineering",
      description: "Meticulously designed components for reliable operation.",
    },
  ];

  return (
    <section className="bg-[#020203] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex flex-col gap-12 md:flex-row md:items-center">
          {/* Left Column - Text */}
          <div className="md:w-1/2">
            <div className="space-y-1 text-gray-300 text-sm tracking-[0.3em] uppercase">
              <p>FUTURE</p>
              <p>BY DESIGN</p>
            </div>

            <p className="mt-6 max-w-lg text-sm leading-relaxed text-gray-200">
              We believe the future belongs to those who build it. Driven by the
              ‘Make in India’ spirit, our mission is to design and develop
              innovative robotic solutions that solve real-world problems.
            </p>

            <p className="mt-4 max-w-lg text-sm leading-relaxed text-gray-200">
              Founded by a passionate team from CUSAT, we focus on turning bold
              ideas into real-world solutions that simplify lives and enhance
              productivity. With this vision, we are committed to positioning
              India as a benchmark in the global robotics revolution.
            </p>

            <button className="mt-8 rounded-full border border-white/40 px-6 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black">
              GET STARTED
            </button>
          </div>

          {/* Right Column - Image Card */}
          <div className="relative flex-1 md:w-1/2">
            {/* Dotted Border Background */}
            <div className="pointer-events-none absolute inset-6 rounded-3xl border border-white/10 border-dotted" />

            {/* Glass Card */}
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 backdrop-blur">
              <div className="relative">
                <Image
                  src="/images/robot-arm.png"
                  alt="Robotic arm illustration"
                  width={400}
                  height={256}
                  className="mx-auto h-64 w-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500 uppercase tracking-widest text-sm mb-4">
            Innovation
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight mb-6">
            Building the Future
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Pioneering robotics technology that transforms industries and improves lives.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 border border-white/10 hover:border-white/30 transition-colors"
            >
              <feature.icon className="text-white mb-6" size={40} />
              <h3 className="text-xl font-bold text-white uppercase mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
