import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-black overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900/50 to-black" />
      
      {/* Sketch Robotics watermark text in background */}
      <div className="absolute top-16 right-0 text-[120px] font-light text-white/[0.03] tracking-wider leading-none hidden lg:block">
        <div>Sketch</div>
        <div className="ml-20">Robotics</div>
      </div>

      {/* Robotic factory image placeholder - right side */}
      <div className="absolute right-0 top-0 w-full md:w-2/3 h-full">
        {/* IMAGE PLACEHOLDER: Replace with isometric robot factory scene */}
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src="/images/hero-robots.svg"
            alt="Robotic factory illustration"
            fill
            priority
            className="object-contain object-right-top opacity-80"
          />
        </div>
      </div>
      
      {/* Left side gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent md:w-2/3" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="mx-auto flex max-w-6xl items-center px-6 pt-24">
          <div className="max-w-xl">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-white font-light tracking-tight">
              <span className="block">Everything</span>
              <span className="block">Starts</span>
              <span className="block">From a Sketch</span>
            </h1>

            {/* Subtext */}
            <p className="mt-8 max-w-md text-sm leading-relaxed text-white/60 font-light">
              Transforming ideas into reality through
              cutting-edge robotics and AI solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
