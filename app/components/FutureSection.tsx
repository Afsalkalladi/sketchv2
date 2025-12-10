import Image from "next/image";
import { Cpu, Zap, Settings } from "lucide-react";

export default function FutureSection() {
  const features = [
    {
      icon: Cpu,
      title: "Advanced AI",
      description:
        "Cutting-edge artificial intelligence powering our robotic solutions.",
    },
    {
      icon: Zap,
      title: "High Performance",
      description:
        "Optimized systems delivering exceptional speed and efficiency.",
    },
    {
      icon: Settings,
      title: "Precision Engineering",
      description: "Meticulously designed components for reliable operation.",
    },
  ];

  return (
    <section
      id="solution"
      className="bg-black border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col gap-16 md:flex-row md:items-center">
          {/* Left Column - Text */}
          <div className="md:w-1/2 relative z-10">
            <div className="space-y-1 text-gray-400 text-xs tracking-[0.35em] uppercase font-medium">
              <p>FUTURE</p>
              <p>BY DESIGN</p>
            </div>

            <h2 className="mt-8 text-4xl md:text-5xl font-bold text-white uppercase tracking-tight leading-tight">
              Building the <br />
              <span className="text-gray-500">Future Today</span>
            </h2>

            <p className="mt-8 max-w-lg text-sm leading-7 text-gray-300">
              We believe the future belongs to those who build it. Driven by the
              ‘Make in India’ spirit, our mission is to design and develop
              innovative robotic solutions that solve real-world problems.
            </p>

            <p className="mt-4 max-w-lg text-sm leading-7 text-gray-400">
              Founded by a passionate team from CUSAT, we focus on turning bold
              ideas into real-world solutions that simplify lives.
            </p>

            <button className="mt-10 border border-white px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black">
              Our Solutions
            </button>
          </div>

          {/* Right Column - Image Card */}
          <div className="relative flex-1 md:w-1/2">
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-1">
              <div className="rounded-[22px] bg-black/50 p-6 backdrop-blur-md">
                <Image
                  src="/images/robot-arm.png"
                  alt="Robotic arm illustration"
                  width={400}
                  height={400}
                  className="mx-auto h-auto w-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300"
            >
              <feature.icon
                className="text-white mb-6 opacity-70 group-hover:opacity-100"
                size={32}
              />
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
