import { Award, Trophy, Star, Medal } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "Innovation Award",
      year: "2024",
      description: "Recognized for breakthrough robotics technology.",
    },
    {
      icon: Award,
      title: "Best Startup",
      year: "2023",
      description: "Awarded for excellence in the robotics sector.",
    },
    {
      icon: Star,
      title: "Tech Excellence",
      year: "2023",
      description: "Honored for technological innovation and impact.",
    },
  ];

  return (
    <section className="bg-black py-24 border-t border-white/10 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-white/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-[0.2em] text-white">
            Achievements
          </h2>
          <div className="mt-2 h-1 w-24 bg-white/20 mx-auto rounded-full" />
        </div>

        {/* Glass Card Container */}
        <div className="rounded-[40px] border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/5 bg-black/40 p-8 transition-all hover:border-white/20 hover:bg-black/60"
              >
                <div>
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    <item.icon size={28} />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-white uppercase tracking-wider">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-8 border-t border-white/10 pt-4 flex justify-between items-end">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Year
                  </span>
                  <span className="text-2xl font-bold text-white/30 group-hover:text-white transition-colors">
                    {item.year}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative indicators similar to PDF mockup dots */}
          <div className="mt-10 flex justify-center gap-3">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === 0 ? "w-8 bg-white" : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
