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

      {/* Dark overlay – stronger on left, subtle on right (from Figma) */}
      <div
        className="absolute inset-0 opacity-95"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Top gradient bar for navbar blending */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-black" />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-center">
        <div className="mx-auto flex w-full max-w-7xl px-6 md:px-10 lg:px-20">
          <div className="max-w-xl pt-10 pb-20 flex flex-col justify-center">
            {/* Main Heading – Figma: text-5xl, font-light, tracking-[4px], leading-[59.04px] */}
            <h1
              className="font-light text-white text-[36px] sm:text-[42px] md:text-[48px] leading-[59.04px] tracking-[4px]"
              style={{
                fontFamily: "'Unbounded', sans-serif",
              }}
            >
              <span className="block">Everything</span>
              <span className="block">Starts</span>
              <span className="block">From a Sketch</span>
            </h1>

            {/* Subtext – Figma: text-sm, font-light, leading-6, tracking-widest, opacity-80 */}
            <p
              className="mt-8 text-white text-sm font-light leading-6 tracking-widest opacity-80 max-w-96"
              style={{
                fontFamily: "'Unbounded', sans-serif",
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
