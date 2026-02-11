import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  details: string[];
}

const founders: TeamMember[] = [
  {
    name: "MUHAMMED FAISAL P K",
    role: "CEO",
    image: "/images/team/faisal.png",
    linkedin: "https://www.linkedin.com/in/muhammed-faisal-p-k-183376259/",
    details: [
      "5+ years in robotics & automation",
      "1st place, IndiaSkills 2022 | 4th place, WorldSkills (Mobile Robotics)",
      "Experience with Samsung Electronics",
      "Driving hardware integration at Sketch Robotics",
    ],
  },
  {
    name: "ROMAL JOSBIN",
    role: "COO",
    image: "/images/team/romal.png",
    linkedin: "https://www.linkedin.com/in/romal-josbin/",
    details: [
      "Project management & team leadership",
      "Led Team Tarusa CUSAT (All India Rank 1, HBAJA)",
      "Managed Team Horizon (ERC 2024, World Rank 18)",
      "Flipkart Grid 6.0 finalist & Convenor, Vibhava Innovation Summit",
    ],
  },
  {
    name: "MUHAMMED SIYAD P",
    role: "CO-FOUNDER",
    image: "/images/team/siyad.png",
    linkedin: "https://www.linkedin.com/in/muhammedsiyadp/",
    details: [
      "Robotics Software Engineer",
      "Expertise in control systems & autonomous navigation",
      "4th place, WorldSkills 2022 (Mobile Robotics)",
      "Led software integration, ERC 2024 (World Rank 18)",
      "Research at IISc Bangalore | Robotics Engineer at Airbus",
    ],
  },
];

const mentors: TeamMember[] = [
  {
    name: "DR. ASHA ELIZABETH",
    role: "Retired Professor, CUSAT",
    image: "/images/team/ashamam.png",
    linkedin: "#",
    details: ["Retired Professor, CUSAT"],
  },
  {
    name: "PROF. SHEENA K.M",
    role: "Faculty, CUSAT",
    image: "/images/team/sheenamiss.png",
    linkedin: "#",
    details: ["Faculty, CUSAT"],
  },
];

// --- NEW DATA ARRAY FOR TEAM ---
const teamMembers: TeamMember[] = [
  {
    name: "MUHAMMED SAJEEM",
    role: "EMBEDDED ENGINEER",
    image: "/images/team/sajeem.png", // Replace with actual image path
    linkedin: "#",
    details: ["Expertise in Full Stack", "React & Node.js specialist"],
  },
  {
    name: "AFSAL K",
    role: "ROBOTICS ENGINEER",
    image: "/images/team/afsalkalladi.png", // Replace with actual image path
    linkedin: "https://www.linkedin.com/in/afsalkalladi/",
    details: ["UI/UX Design", "Product Prototyping"],
  },
  {
    name: "ASHIND V T",
    role: "ROBOTICS ENGINEER",
    image: "/images/team/ashind.png", // Replace with actual image path
    linkedin: "https://www.linkedin.com/in/ashind-vt-2a8119261/",
    details: ["Robotics Engineer", "Embedded Systems"],
  },
  {
    name: "MOHSIN NASIR",
    role: "ROBOTICS ENGINEER",
    image: "/images/team/muhsin.png", // Replace with actual image path
    linkedin: "https://www.linkedin.com/in/mohsin-nasir/",
    details: ["Technical Specialist", "Innovation Lead"],
  },
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="relative group">
      <div className="relative w-[6.25rem] sm:w-[clamp(12rem,15vw,17rem)] h-[8.75rem] sm:h-[clamp(17rem,22vw,25rem)] rounded-[0.375rem] sm:rounded-[0.625rem] overflow-hidden border border-[#fafafa]/60 shadow-[0px_0px_20px_5px_rgba(255,255,255,0.10)] sm:shadow-[0px_0px_45.7px_15px_rgba(255,255,255,0.15)] bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(245,245,245,0.2)] to-[rgba(0,0,0,0)] rounded-[0.375rem] sm:rounded-[0.625rem] z-10 pointer-events-none" />
        <div className="relative w-full h-[6.25rem] sm:h-[clamp(13.5rem,17.5vw,20rem)]">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="absolute bottom-2 sm:bottom-10 left-1.5 sm:left-4 z-20">
          <p
            className="text-white text-[0.375rem] sm:text-[0.8125rem] font-normal leading-tight sm:leading-[0.667rem] mb-0.5 sm:mb-2"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            {member.name}
          </p>
          <p
            className="text-[rgba(255,136,0,0.87)] text-[0.3125rem] sm:text-[0.8125rem] font-normal leading-tight sm:leading-[0.667rem]"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            {member.role}
          </p>
        </div>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-2 sm:bottom-10 right-1 sm:right-4 z-30 opacity-60 hover:opacity-100 transition-opacity"
        >
          <div className="w-[1rem] sm:w-[2.6875rem] h-[1rem] sm:h-[2.6875rem] bg-[rgba(48,48,48,0.85)] rounded-[0.125rem] sm:rounded-[0.25rem] flex items-center justify-center">
            <Image
              src="/images/linkedin-icon.png"
              alt="LinkedIn"
              width={43}
              height={43}
              className="rounded-[2px] sm:rounded-[4px]"
            />
          </div>
        </a>
      </div>
    </div>
  );
}

function TeamSection() {
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
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 right-0 z-0 opacity-80"
          style={{
            ...dotPatternStyle,
            width: "37.5rem",
            height: "37.5rem",
            right: "-6.25rem",
            top: "-3.125rem",
          }}
        />
        <div
          className="absolute bottom-0 left-0 z-0 opacity-60"
          style={{
            ...dotPatternStyle,
            width: "43.75rem",
            height: "43.75rem",
            left: "-9.375rem",
            bottom: "-6.25rem",
          }}
        />
        <div className="absolute top-20 right-0 w-[31.25rem] h-[31.25rem] opacity-20 z-0">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-white/10 to-transparent blur-3xl" />
        </div>
      </div>

      <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 md:px-10 lg:px-[3.75rem] relative z-10">
        {/* Large Background Stroke Text */}
        <div className="absolute left-4 top-28 lg:top-[clamp(0.625rem,3.5vw,5rem)] opacity-20 pointer-events-none select-none z-0">
          <h1
            className="font-unbounded font-normal whitespace-nowrap text-[3.75rem] md:text-[5rem] lg:text-[clamp(11rem,16vw,20rem)] lg:leading-[1] tracking-tighter lg:tracking-[-0.125rem] text-transparent origin-left scale-y-[0.85]"
            style={{
              WebkitTextStroke: "2px rgba(255, 255, 255, 0.3)",
            }}
          >
            TEAM
          </h1>
        </div>

        {/* Hero Title */}
        <div className="mb-12 sm:mb-16 md:mb-20 relative z-10">
          <h2
            className="font-unbounded font-light text-[1.75rem] sm:text-[2rem] md:text-[2.375rem] lg:text-[clamp(2.375rem,3.2vw,3.5rem)] leading-[1.1] tracking-[0.125rem] sm:tracking-[0.1875rem] md:tracking-[0.25rem]"
            style={{
              background: "linear-gradient(90deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            MEET OUR TEAM
          </h2>
        </div>

        {/* Founders */}
        <div className="mb-8 sm:mb-20 md:mb-24">
          <h2
            className="text-sm sm:text-xl md:text-[1.5rem] font-normal text-white mb-3 sm:mb-10 md:mb-12 leading-tight sm:leading-[0.667rem]"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            FOUNDERS
          </h2>
          <div className="grid grid-cols-3 gap-3 sm:gap-8 md:gap-10 justify-items-center lg:justify-items-start">
            {founders.map((member, index) => (
              <TeamCard key={`founder-${index}`} member={member} />
            ))}
          </div>
        </div>

        {/* Mentors */}
        <div className="mb-8 sm:mb-20 md:mb-24">
          <h2
            className="text-sm sm:text-xl md:text-[1.5rem] font-normal text-white mb-3 sm:mb-10 md:mb-12 leading-tight sm:leading-[0.667rem]"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            OUR MENTORS
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-2 gap-3 sm:gap-8 md:gap-10 justify-items-center lg:justify-items-start">
            {mentors.map((member, index) => (
              <TeamCard key={`mentor-${index}`} member={member} />
            ))}
          </div>
        </div>

        {/* --- NEW SECTION: TEAM --- */}
        <div className="mb-8 sm:mb-20 md:mb-24">
          <h2
            className="text-sm sm:text-xl md:text-[1.5rem] font-normal text-white mb-3 sm:mb-10 md:mb-12 leading-tight sm:leading-[0.667rem]"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            TEAM
          </h2>
          <div className="grid grid-cols-3 gap-3 sm:gap-8 md:gap-10 justify-items-center lg:justify-items-start">
            {teamMembers.map((member, index) => (
              <TeamCard key={`team-${index}`} member={member} />
            ))}
          </div>
        </div>
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