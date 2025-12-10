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
    {
      icon: Medal,
      title: "Industry Leader",
      year: "2022",
      description: "Acknowledged as a pioneer in Indian robotics.",
    },
  ];

  const indicators = [0, 1, 2, 3, 4];

  return (
    <section className="bg-gradient-to-b from-[#f0f0f0] via-[#dcdcdc] to-[#f0f0f0] py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-center text-xl tracking-[0.35em] text-gray-700 uppercase">
          Achievements
        </h2>

        {/* Main Card */}
        <div className="mt-12 rounded-[40px] bg-white/60 p-10 shadow-[0_0_60px_rgba(0,0,0,0.25)]">
          {/* Placeholder Cards Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="h-40 rounded-[32px] bg-gray-200/60" />
            <div className="h-40 rounded-[32px] bg-gray-200/60" />
            <div className="h-40 rounded-[32px] bg-gray-200/60" />
          </div>

          {/* Slider Indicators */}
          <div className="mt-10 flex justify-center gap-3">
            {indicators.map((index) => (
              <span
                key={index}
                className={`h-2 w-6 rounded-full ${
                  index === 0 ? "bg-gray-700" : "bg-gray-400/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
