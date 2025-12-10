import Image from "next/image";

export default function FutureSection() {
  return (
    <section id="solution" className="bg-black py-24 md:py-32 relative overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
          {/* Left Column - Text */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight tracking-tight uppercase">
              Future<br />By Design
            </h2>

            <div className="mt-8 space-y-4 text-sm leading-relaxed text-white/60 font-light max-w-md">
              <p>
                We believe the future belongs to those who build it. Driven by the
                &quot;Make in India&quot; spirit, our mission is to design and develop
                innovative robotic solutions that solve real-world problems.
              </p>

              <p>
                Founded by a passionate team from CUSAT, we focus on turning bold
                ideas into real-world solutions that simplify lives and enhance
                productivity. With this vision, we are committed to positioning
                India as a benchmark in the global robotics revolution.
              </p>
            </div>

            {/* Get Started Button */}
            <button className="mt-8 rounded-full border border-white/30 px-6 py-2.5 text-xs font-light tracking-wider uppercase text-white transition-colors hover:bg-white/10">
              Get started
            </button>
          </div>

          {/* Right Column - Robotic Arm Image Placeholder */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            {/* IMAGE PLACEHOLDER: Replace with white robotic arm image */}
            <div className="relative w-72 h-80 md:w-96 md:h-[450px]">
              <Image
                src="/images/robotic-arm.svg"
                alt="Robotic arm"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
