import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-black overflow-hidden"
    >
      {/* Background gradient - Linear from black to transparent */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,1) 1%, rgba(0,0,0,0) 92%)",
        }}
      />

      {/* Sketch Robotics watermark text in background */}
      <div className="absolute top-20 right-8 text-[100px] md:text-[140px] font-extralight text-white/[0.02] tracking-[0.1em] leading-none hidden lg:block">
        <div>Sketch</div>
        <div className="ml-16">Robotics</div>
      </div>

      {/* Robotic factory image placeholder - right side */}
      <div className="absolute right-0 top-0 w-full md:w-2/3 h-full">
        {/* IMAGE PLACEHOLDER: Replace with isometric robot factory scene */}
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src="/images/hero-robots.png"
            alt="Robotic factory illustration"
            fill
            priority
            className="object-contain object-right-top opacity-70"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="mx-auto flex max-w-6xl items-center px-6 pt-24">
          <div className="max-w-xl">
            {/* Main Heading - Unbounded Light, 49.2px, line-height 59, letter-spacing 4px */}
            <h1
              className="text-[32px] md:text-[42px] lg:text-[49px] font-light text-white"
              style={{
                lineHeight: "59px",
                letterSpacing: "4px",
              }}
            >
              <span className="block">Everything</span>
              <span className="block">Starts</span>
              <span className="block">From a Sketch</span>
            </h1>

            {/* Subtext - 14.67px, 80% opacity, line-height 25, letter-spacing 2px */}
            <p
              className="mt-8 max-w-md text-[14px] md:text-[15px] font-light text-white/80"
              style={{
                lineHeight: "25px",
                letterSpacing: "2px",
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
