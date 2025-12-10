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
    <section className="bg-black py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
