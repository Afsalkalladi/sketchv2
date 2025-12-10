import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#f8f8f8] overflow-hidden"
    >
      {/* Background with robotic equipment on right side */}
      <div className="absolute inset-0">
        {/* Light gray base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f5] via-[#ececec] to-[#e5e5e5]" />
        
        {/* Robotic equipment illustration - right side */}
        <div className="absolute right-0 top-0 w-2/3 h-full">
          <Image
            src="/images/hero-robots.svg"
            alt="Robotic equipment"
            fill
            priority
            className="object-contain object-right"
          />
        </div>
        
        {/* Subtle gradient overlay for text area */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5f5f5] via-[#f5f5f5]/80 to-transparent w-1/2" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="mx-auto flex max-w-6xl items-center px-6 pt-24">
          <div className="max-w-lg">
            {/* Main Heading - Elegant italic serif */}
            <h1 className="text-4xl md:text-[52px] leading-[1.1] text-gray-800 font-[family-name:var(--font-playfair)] italic font-normal">
              <span className="block">Everything</span>
              <span className="block">Starts</span>
              <span className="block">From a Sketch</span>
            </h1>

            {/* Subtext */}
            <p className="mt-8 max-w-md text-sm leading-relaxed text-gray-500">
              Transforming ideas into reality through
              cutting-edge robotics and AI solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
