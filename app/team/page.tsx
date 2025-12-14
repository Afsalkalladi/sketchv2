import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

const founders: TeamMember[] = [
  {
    name: "MUHAMMED FAISAL",
    role: "FOUNDER & CEO",
    image: "/images/team-faisal.png",
    linkedin: "#",
  },
  {
    name: "ROMAL JOSBIN",
    role: "ROBOTICS ENGINEER",
    image: "/images/team-romal.png",
    linkedin: "#",
  },
  {
    name: "ASHIND V T",
    role: "ROBOTICS ENGINEER",
    image: "/images/team-ashind.png",
    linkedin: "#",
  },
];

const mentors: TeamMember[] = [
  {
    name: "MUHAMMED FAISAL",
    role: "FOUNDER & CEO",
    image: "/images/team-faisal.png",
    linkedin: "#",
  },
  {
    name: "ROMAL JOSBIN",
    role: "ROBOTICS ENGINEER",
    image: "/images/team-romal.png",
    linkedin: "#",
  },
];

const team: TeamMember[] = [
  {
    name: "MUHAMMED FAISAL",
    role: "FOUNDER & CEO",
    image: "/images/team-faisal.png",
    linkedin: "#",
  },
  {
    name: "ROMAL JOSBIN",
    role: "ROBOTICS ENGINEER",
    image: "/images/team-romal.png",
    linkedin: "#",
  },
  {
    name: "ASHIND V T",
    role: "ROBOTICS ENGINEER",
    image: "/images/team-ashind.png",
    linkedin: "#",
  },
  {
    name: "MUHAMMED FAISAL",
    role: "FOUNDER & CEO",
    image: "/images/team-faisal.png",
    linkedin: "#",
  },
  {
    name: "ROMAL JOSBIN",
    role: "ROBOTICS ENGINEER",
    image: "/images/team-romal.png",
    linkedin: "#",
  },
  {
    name: "ASHIND V T",
    role: "ROBOTICS ENGINEER",
    image: "/images/team-ashind.png",
    linkedin: "#",
  },
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="relative group">
      <div className="relative w-[240px] sm:w-[268px] h-[350px] sm:h-[393px] rounded-[10px] overflow-hidden border border-[#fafafa]/60 shadow-[0px_0px_45.7px_15px_rgba(255,255,255,0.15)] bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(245,245,245,0.2)] to-[rgba(0,0,0,0)] rounded-[10px] z-10 pointer-events-none" />
        <div className="relative w-full h-[280px] sm:h-[315px]">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="absolute bottom-8 sm:bottom-10 left-3 sm:left-4 z-20">
          <p
            className="text-white text-xs sm:text-[13px] font-normal leading-[10.667px] mb-2"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            {member.name}
          </p>
          <p
            className="text-[rgba(255,136,0,0.87)] text-xs sm:text-[13px] font-normal leading-[10.667px]"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            {member.role}
          </p>
        </div>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-8 sm:bottom-10 right-3 sm:right-4 z-30 opacity-60 hover:opacity-100 transition-opacity"
        >
          <div className="w-[38px] sm:w-[43px] h-[38px] sm:h-[43px] bg-[rgba(48,48,48,0.85)] rounded-[4px] flex items-center justify-center">
            <Image
              src="/images/linkedin-icon.png"
              alt="LinkedIn"
              width={43}
              height={43}
              className="rounded-[4px]"
            />
          </div>
        </a>
      </div>
    </div>
  );
}

function TeamSection() {
  // This is the style extracted exactly from your FutureSection
  const dotPatternStyle = {
    backgroundImage:
      "radial-gradient(circle, rgba(255, 255, 255, 0.3) 1.5px, transparent 2px)",
    backgroundSize: "24px 24px",
    maskImage: "radial-gradient(circle, black 40%, transparent 70%)",
    WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 70%)",
  };

  return (
    <section
      id="team"
      className="bg-black py-16 sm:py-20 md:py-24 relative overflow-hidden min-h-screen"
    >
      {/* ================= BACKGROUND ELEMENTS ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* 1. TOP RIGHT DOTS (From Robotic Arm Section) */}
        <div
          className="absolute top-0 right-0 z-0 opacity-80"
          style={{
            ...dotPatternStyle,
            width: "600px",
            height: "600px",
            right: "-100px", // Slight offset to bleed off screen
            top: "-50px",
          }}
        />

        {/* 2. BOTTOM LEFT DOTS (Balanced placement) */}
        <div
          className="absolute bottom-0 left-0 z-0 opacity-60"
          style={{
            ...dotPatternStyle,
            width: "700px",
            height: "700px",
            left: "-150px",
            bottom: "-100px",
          }}
        />

        {/* 3. Gradient Glow (Keep existing for ambiance) */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] opacity-20 z-0">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-white/10 to-transparent blur-3xl" />
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 relative z-10">
        {/* Hero Title */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h1
            className="text-3xl sm:text-4xl md:text-[65.591px] font-normal leading-tight md:leading-[53.818px] tracking-tight md:tracking-[-0.6727px] bg-gradient-to-r from-white from-[23%] to-white/0 to-[125%] bg-clip-text text-transparent mb-8 sm:mb-12"
            style={{
              fontFamily: "'Unbounded', sans-serif",
              WebkitTextFillColor: "transparent",
            }}
          >
            MEET OUR TEAM
          </h1>
        </div>

        {/* Founders */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <h2
            className="text-xl sm:text-2xl md:text-[24px] font-normal text-white mb-8 sm:mb-10 md:mb-12 leading-[10.667px]"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            FOUNDERS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 justify-items-center lg:justify-items-start">
            {founders.map((member, index) => (
              <TeamCard key={`founder-${index}`} member={member} />
            ))}
          </div>
        </div>

        {/* Mentors */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <h2
            className="text-xl sm:text-2xl md:text-[24px] font-normal text-white mb-8 sm:mb-10 md:mb-12 leading-[10.667px]"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            OUR MENTORS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 justify-items-center lg:justify-items-start">
            {mentors.map((member, index) => (
              <TeamCard key={`mentor-${index}`} member={member} />
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16 sm:mb-20">
          <h2
            className="text-xl sm:text-2xl md:text-[24px] font-normal text-white mb-8 sm:mb-10 md:mb-12 leading-[10.667px]"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            TEAM
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 justify-items-center lg:justify-items-start">
            {team.map((member, index) => (
              <TeamCard key={`team-${index}`} member={member} />
            ))}
          </div>
        </div>
      </div>

      {/* Large background text */}
      <div
        className="absolute top-32 left-0 opacity-5 pointer-events-none whitespace-nowrap overflow-hidden z-0"
        style={{ fontFamily: "'Unbounded', sans-serif" }}
      >
        <p className="text-[150px] sm:text-[200px] md:text-[312.164px] font-normal leading-[256.135px] tracking-[-3.2017px] text-white">
          TEAM
        </p>
      </div>
    </section>
  );
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <TeamSection />
      <Footer />
    </div>
  );
}
