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

  return (
    <section className="bg-black py-20 md:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500 uppercase tracking-widest text-sm mb-4">
            Recognition
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight mb-6">
            Our Achievements
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Milestones that mark our journey of excellence and innovation.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="p-6 border border-white/10 hover:border-white/30 transition-colors group"
            >
              <achievement.icon 
                className="text-white mb-4 group-hover:scale-110 transition-transform" 
                size={36} 
              />
              <p className="text-gray-500 text-sm mb-2">{achievement.year}</p>
              <h3 className="text-lg font-bold text-white uppercase mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
