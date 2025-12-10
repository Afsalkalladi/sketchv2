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
    <section className="bg-black py-32 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-gray-500">
            Our Milestone
          </span>
          <h2 className="mt-4 text-3xl font-bold uppercase tracking-widest text-white md:text-4xl">
            Achievements
          </h2>
        </div>

        {/* Main Glass Card Container */}
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-sm">
          {/* Background Gradient Effect */}
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/5 blur-3xl"></div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/5 bg-black/40 p-8 transition-colors hover:border-white/20 hover:bg-black/60"
              >
                <div>
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                    <item.icon size={24} />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
                <div className="mt-8 border-t border-white/10 pt-4">
                  <span className="text-2xl font-bold text-white/20 group-hover:text-white/40 transition-colors">
                    {item.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
