import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MapPin, ExternalLink, Briefcase, Users, Zap } from "lucide-react";

interface JobOpening {
  title: string;
  description: string;
  location: string;
  applyLink: string;
}

const jobOpenings: JobOpening[] = [
  {
    title: "ROBOTICS HARDWARE ENGINEER",
    description:
      "Design and develop robust robotic hardware systems that power intelligent automation solutions. Collaborate closely with software and mechanical teams to bring concepts to life.",
    location: "Remote / Kochi",
    applyLink: "https://forms.gle/BUsoG7yHXKt92E5YA",
  },
  {
    title: "ROBOTICS SOFTWARE ENGINEER",
    description:
      "Develop and optimize software architecture for autonomous systems, control algorithms, and robotics applications. Work alongside hardware and mechanical engineers to create integrated solutions.",
    location: "Remote / Kochi",
    applyLink: "https://forms.gle/BUsoG7yHXKt92E5YA",
  },
  {
    title: "MECHANICAL ENGINEER (ROBOTICS)",
    description:
      "Lead the mechanical design and prototyping of various mechanical systems. Collaborate with hardware and software teams to ensure seamless integration and functionality.",
    location: "Remote / Kochi",
    applyLink: "https://forms.gle/BUsoG7yHXKt92E5YA",
  },
  {
    title: "MEDIA AND MARKETING SPECIALIST",
    description:
      "Drive brand growth by creating and executing marketing campaigns, managing social media, and coordinating outreach efforts. Work closely with engineering and business teams to communicate our innovations effectively.",
    location: "Remote / Kochi",
    applyLink: "https://forms.gle/BUsoG7yHXKt92E5YA",
  },
];

const whyWorkWithUs = [
  {
    icon: Users,
    title: "Proven Excellence",
    description:
      "Be part of a team with proven excellence, including WorldSkills global rankers, European Rover Challenge contributors, and diverse AI and robotics projects.",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Projects",
    description:
      "Engage in projects involving AI-driven robotics, industrial automation, and next-generation innovation.",
  },
  {
    icon: Briefcase,
    title: "Flexible Work",
    description:
      "Flexible work options with remote and Kochi-based opportunities.",
  },
];

function JobCard({ job }: { job: JobOpening }) {
  return (
    <div
      className="relative flex flex-col p-5 sm:p-6 md:p-8 rounded-[20px] md:rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out hover:shadow-[0px_0px_30px_0px_rgba(255,255,255,0.1)] border border-white/5 hover:border-white/10"
      style={{
        background:
          "linear-gradient(248.77deg, rgba(16, 15, 15, 1) 3.053%, rgba(44, 44, 44, 1) 158.22%)",
      }}
    >
      {/* Job Title with Apply Link */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3
          className="font-normal text-base sm:text-lg md:text-[20px] text-white/90"
          style={{ fontFamily: "'Unbounded', sans-serif" }}
        >
          {job.title}
        </h3>
        <a
          href={job.applyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[rgba(255,136,0,0.15)] hover:bg-[rgba(255,136,0,0.3)] border border-[rgba(255,136,0,0.3)] flex items-center justify-center transition-all duration-300 group"
          aria-label={`Apply for ${job.title}`}
        >
          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-[rgba(255,136,0,0.87)] group-hover:scale-110 transition-transform" />
        </a>
      </div>

      {/* Description */}
      <p
        className="font-light text-sm sm:text-[15px] text-white/60 leading-relaxed mb-6 flex-grow"
        style={{ fontFamily: "'Unbounded', sans-serif" }}
      >
        {job.description}
      </p>

      {/* Location & Apply Button */}
      <div className="flex items-center justify-between gap-4 mt-auto">
        <div className="flex items-center gap-2 text-white/50">
          <MapPin className="w-4 h-4" />
          <span
            className="text-xs sm:text-sm"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            {job.location}
          </span>
        </div>
        <a
          href={job.applyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="h-[40px] sm:h-[48px] px-5 sm:px-8 rounded-[15px] sm:rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-center text-xs sm:text-sm text-white hover:bg-white/10 transition-all border border-white/10 hover:border-white/20"
          style={{
            fontFamily: "'Unbounded', sans-serif",
            background:
              "linear-gradient(230.26deg, rgba(16, 15, 15, 1) 163.03%, rgba(44, 44, 44, 1) 160.2%)",
          }}
        >
          APPLY NOW
        </a>
      </div>
    </div>
  );
}

function WhyWorkCard({
  item,
}: {
  item: { icon: React.ElementType; title: string; description: string };
}) {
  const IconComponent = item.icon;
  return (
    <div className="flex flex-col items-start p-5 sm:p-6 rounded-[20px] border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300">
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[rgba(255,136,0,0.1)] border border-[rgba(255,136,0,0.2)] flex items-center justify-center mb-4">
        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[rgba(255,136,0,0.87)]" />
      </div>
      <h4
        className="text-white text-sm sm:text-base font-normal mb-2"
        style={{ fontFamily: "'Unbounded', sans-serif" }}
      >
        {item.title}
      </h4>
      <p
        className="text-white/50 text-xs sm:text-sm font-light leading-relaxed"
        style={{ fontFamily: "'Unbounded', sans-serif" }}
      >
        {item.description}
      </p>
    </div>
  );
}

function CareersSection() {
  const dotPatternStyle = {
    backgroundImage:
      "radial-gradient(circle, rgba(255, 255, 255, 0.3) 1.5px, transparent 2px)",
    backgroundSize: "24px 24px",
    maskImage: "radial-gradient(circle, black 40%, transparent 70%)",
    WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 70%)",
  };

  return (
    <section
      id="careers"
      className="bg-black py-16 sm:py-20 md:py-24 relative overflow-hidden min-h-screen"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 right-0 z-0 opacity-80"
          style={{
            ...dotPatternStyle,
            width: "600px",
            height: "600px",
            right: "-100px",
            top: "-50px",
          }}
        />
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
        <div className="absolute top-20 right-0 w-[500px] h-[500px] opacity-20 z-0">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-white/10 to-transparent blur-3xl" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-[60px] relative z-10">
        {/* Large Background Stroke Text */}
        <div className="absolute left-4 top-28 lg:top-10 laptop-sm:top-[40px] xl:top-[60px] 2xl:top-[80px] opacity-20 pointer-events-none select-none z-0">
          <h1
            className="font-unbounded font-normal whitespace-nowrap text-[60px] md:text-[80px] lg:text-[180px] laptop-sm:text-[220px] xl:text-[240px] 2xl:text-[320px] lg:leading-[1] 2xl:leading-[152px] tracking-tighter lg:tracking-[-2px] 2xl:tracking-[-3.5px] text-transparent origin-left scale-y-[0.85]"
            style={{
              WebkitTextStroke: "2px rgba(255, 255, 255, 0.3)",
            }}
          >
            CAREERS
          </h1>
        </div>

        {/* Hero Title */}
        <div className="mb-8 sm:mb-12 md:mb-16 relative z-10">
          <h2
            className="font-unbounded font-light text-[28px] sm:text-[32px] md:text-[38px] lg:text-[48px] leading-[1.1] tracking-[2px] sm:tracking-[3px] md:tracking-[4px] mb-3 lg:mb-4"
            style={{
              background: "linear-gradient(90deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            CAREERS
          </h2>
          <p
            className="font-unbounded font-normal text-[#a7a7a7] opacity-60 text-[13px] leading-[1.7] md:text-base lg:text-[15px] xl:text-[16px] 2xl:text-[24.264px] lg:leading-[1.4] max-w-2xl mt-3 lg:mt-6"
          >
            Join our dynamic team of innovators shaping the future of robotics
            and automation.
          </p>
        </div>

        {/* Open Positions */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <h2
            className="text-xl sm:text-2xl md:text-[24px] font-normal text-white mb-8 sm:mb-10 md:mb-12"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            OPEN POSITIONS
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {jobOpenings.map((job, index) => (
              <JobCard key={`job-${index}`} job={job} />
            ))}
          </div>
        </div>

        {/* Why Work With Us */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <h2
            className="text-xl sm:text-2xl md:text-[24px] font-normal text-white mb-8 sm:mb-10 md:mb-12"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            WHY WORK WITH US?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {whyWorkWithUs.map((item, index) => (
              <WhyWorkCard key={`why-${index}`} item={item} />
            ))}
          </div>
        </div>

      </div>


    </section>
  );
}

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <CareersSection />
      <Footer />
    </div>
  );
}
