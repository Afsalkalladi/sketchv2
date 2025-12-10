import { Globe, Users, Building } from "lucide-react";

export default function GlobalSection() {
  const stats = [
    { icon: Globe, value: "10+", label: "Countries Reached" },
    { icon: Users, value: "50+", label: "Team Members" },
    { icon: Building, value: "100+", label: "Projects Delivered" },
  ];

  return (
    <section className="bg-black py-20 md:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500 uppercase tracking-widest text-sm mb-4">
            Our Reach
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight mb-6">
            Global Impact
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From our roots at CUSAT to serving clients worldwide, we&apos;re making 
            India proud on the global stage.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 border border-white/10 hover:border-white/30 transition-colors"
            >
              <stat.icon className="text-white mx-auto mb-6" size={40} />
              <p className="text-5xl md:text-6xl font-bold text-white mb-2">
                {stat.value}
              </p>
              <p className="text-gray-400 uppercase tracking-wider text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Make in India Badge */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm uppercase tracking-widest">
            Proudly Made in India 🇮🇳
          </p>
        </div>
      </div>
    </section>
  );
}
