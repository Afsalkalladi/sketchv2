import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Main Content */}
      <div className="bg-black relative min-h-screen pt-[63px]">
        {/* Large Background Text */}
        <div className="absolute left-4 top-[193.5px] -translate-y-1/2 opacity-5">
          <h1 
            className="font-unbounded font-normal whitespace-nowrap"
            style={{
              fontSize: "343.745px",
              lineHeight: "282.047px",
              letterSpacing: "-3.5256px",
            }}
          >
            SOLUTION
          </h1>
        </div>

        {/* Gradient Title */}
        <div className="absolute left-[59px] top-[166px] -translate-y-1/2">
          <h2 
            className="font-unbounded font-normal"
            style={{
              fontSize: "65.591px",
              lineHeight: "53.818px",
              letterSpacing: "-0.6727px",
              background: "linear-gradient(90deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            SOLUTION
          </h2>
        </div>

        {/* Description Text */}
        <div className="absolute left-[87px] top-[632px] -translate-y-1/2 w-[497.62px]">
          <p 
            className="font-unbounded font-normal text-[#a7a7a7] opacity-60"
            style={{
              fontSize: "24.264px",
              lineHeight: "33.363px",
              letterSpacing: "0.5px",
            }}
          >
            <span>At </span>
            <span className="font-semibold text-[#efefef]">Sketch Robotics</span>
            <span>, we transform challenges into opportunities by designing and delivering end-to-end robotics and </span>
            <span className="text-white">AI solutions</span>
            <span>. Whether it's automating processes, building </span>
            <span className="text-white">intelligent systems</span>
            <span>, or enabling next-generation human–machine interaction, we tailor our solutions to meet industry-specific needs with scalable, cost-effective, and </span>
            <span className="text-white">deployment-ready systems.</span>
          </p>
        </div>

        {/* Robot Image */}
        <div className="absolute right-0 top-[359px]">
          <Image 
            src="/images/robot-image.png"
            alt="Robot"
            width={516}
            height={600}
            className="object-cover"
          />
        </div>

        {/* Solution Cards Grid */}
        <div className="absolute left-[76px] top-[1206px] grid grid-cols-2 gap-[36px] w-[936px]">
          {/* Card 1: ROBOTICS & AUTOMATION */}
          <div 
            className="h-[250px] rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative"
            style={{
              background: "linear-gradient(248.77deg, rgba(16, 15, 15, 1) 3.053%, rgba(44, 44, 44, 1) 158.22%)",
            }}
          >
            <p className="absolute left-[30px] top-[23px] font-unbounded font-normal text-[19.2px] text-[rgba(255,255,255,0.4)]">
              ROBOTICS & AUTOMATION
            </p>
            <div 
              className="absolute bottom-[22px] right-[34px] h-[56px] w-[171px] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              style={{
                background: "linear-gradient(230.26deg, rgba(16, 15, 15, 1) 163.03%, rgba(44, 44, 44, 1) 160.2%)",
              }}
            />
          </div>

          {/* Card 2: AI & INTELLIGENT SYSTEM */}
          <div 
            className="h-[250px] rounded-[30px] relative"
            style={{
              background: "linear-gradient(248.8deg, rgba(16, 15, 15, 1) 3.053%, rgba(44, 44, 44, 1) 158.22%)",
            }}
          >
            <p className="absolute left-[29px] top-[23px] font-unbounded font-normal text-[19.2px] text-[rgba(255,255,255,0.4)]">
              AI & INTELLIGENT SYSTEM
            </p>
            <div 
              className="absolute bottom-[22px] right-[34px] h-[56px] w-[171px] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              style={{
                background: "linear-gradient(230.26deg, rgba(16, 15, 15, 1) 163.03%, rgba(44, 44, 44, 1) 160.2%)",
              }}
            />
          </div>

          {/* Card 3: SYSTEM INTEGRATION */}
          <div 
            className="h-[250px] rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative"
            style={{
              background: "linear-gradient(248.77deg, rgba(16, 15, 15, 1) 3.053%, rgba(44, 44, 44, 1) 158.22%)",
            }}
          >
            <p className="absolute left-[33px] top-[29px] font-unbounded font-normal text-[19.2px] text-[rgba(255,255,255,0.4)]">
              SYSTEM INTEGRATION
            </p>
            <div 
              className="absolute bottom-[16px] right-[34px] h-[56px] w-[171px] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              style={{
                background: "linear-gradient(230.26deg, rgba(16, 15, 15, 1) 163.03%, rgba(44, 44, 44, 1) 160.2%)",
              }}
            />
          </div>

          {/* Card 4: SAFETY, COMPLIANCE & SUPPORT */}
          <div 
            className="h-[250px] rounded-[30px] relative"
            style={{
              background: "linear-gradient(248.8deg, rgba(16, 15, 15, 1) 3.053%, rgba(44, 44, 44, 1) 158.22%)",
            }}
          >
            <p className="absolute left-[29px] top-[29px] font-unbounded font-normal text-[19.2px] text-[rgba(255,255,255,0.4)]">
              SAFETY, COMPLIANCE & SUPPORT
            </p>
            <div 
              className="absolute bottom-[16px] right-[34px] h-[56px] w-[171px] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              style={{
                background: "linear-gradient(230.26deg, rgba(16, 15, 15, 1) 163.03%, rgba(44, 44, 44, 1) 160.2%)",
              }}
            />
          </div>
        </div>

        {/* Extra spacing for content */}
        <div className="h-[2200px]" />
      </div>

      <Footer />
    </div>
  );
}
