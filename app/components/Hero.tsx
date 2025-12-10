import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-black"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-robots.png"
          alt="Sketch Robotics workspace"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Dark overlay – stronger on left, subtle on right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0.35) 65%, rgba(0,0,0,0.1) 100%)",
        }}
      />

      {/* Slight top fade so navbar sits cleanly */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0))",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-center">
        <div className="mx-auto flex w-full max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="max-w-xl pt-10 pb-20 flex flex-col justify-center">
            {/* Main Heading – matches layout in screenshot */}
            <h1
              className="font-light text-white text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px]"
              style={{
                lineHeight: "1.15",
                letterSpacing: "0.16em",
                fontFamily: "'Unbounded', system-ui, -apple-system, sans-serif",
              }}
            >
              <span className="block">Everything</span>
              <span className="block mt-1">Starts</span>
              <span className="block mt-1">From a Sketch</span>
            </h1>

            {/* Subtext */}
            <p
              className="mt-8 text-white/80 text-[14px] sm:text-[15px] md:text-[16px] font-light max-w-md"
              style={{
                lineHeight: "1.7",
                letterSpacing: "0.12em",
              }}
            >
              Transforming ideas into reality through
              <br />
              cutting-edge robotics and AI solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
