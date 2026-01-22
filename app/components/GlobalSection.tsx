import Image from "next/image";

export default function GlobalSection() {
  return (
    <section className="bg-black relative overflow-hidden h-screen min-h-[600px] sm:min-h-[700px] md:min-h-[882px] flex flex-col">
      
      {/* Background Gradients & Map (Unchanged) */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)",
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-full opacity-70 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* World Map Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-30 sm:opacity-50 md:opacity-100 mix-blend-screen pointer-events-none">
        <div className="relative w-[400px] h-[255px] sm:w-[600px] sm:h-[383px] md:w-[765px] md:h-[489px] opacity-70">
          <Image
            src="/images/world-map-gray.png"
            alt="World map showing global presence"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full flex-grow flex flex-col py-12 sm:py-16 md:py-20">
        
        {/* --- TOP: LOGOS --- */}
        {/* Kept at the top naturally as the first flex child */}
        <div className="w-full flex items-center justify-between opacity-80 mb-10 shrink-0">
          <Image
            src="/images/trusted/keralastartupmission.svg"
            alt="Trusted Partner 1"
            width={128}
            height={40}
            className="h-8 sm:h-10 w-24 sm:w-32 object-contain"
            priority
          />
          <Image
            src="/images/trusted/rizins.svg"
            alt="Trusted Partner 2"
            width={128}
            height={40}
            className="h-8 sm:h-10 w-24 sm:w-32 object-contain"
            priority
          />
          <Image
            src="/images/trusted/dpiit.svg"
            alt="Trusted Partner 3"
            width={128}
            height={40}
            className="h-8 sm:h-10 w-24 sm:w-32 object-contain"
            priority
          />
          <div className="hidden sm:block">
            <Image
              src="/images/trusted/makervillage.svg"
              alt="Trusted Partner 4"
              width={128}
              height={40}
              className="h-8 sm:h-10 w-24 sm:w-32 object-contain"
              priority
            />
          </div>
           <div className="hidden sm:block">
            <Image
              src="/images/trusted/cusat.svg"
              alt="Trusted Partner 4"
              width={128}
              height={40}
              className="h-8 sm:h-10 w-24 sm:w-32 object-contain"
              priority
            />
          </div>
        </div>

        {/* --- MIDDLE: TEXT CONTENT --- */}
        {/* 'flex-grow' fills the remaining vertical space. 
            'justify-center' aligns the inner text block to the vertical middle. */}
        <div className="flex-grow flex flex-col justify-center">
          <div className="max-w-[520px] animate-slide-up">
            <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl leading-[1.2] sm:leading-[1.3] md:leading-[48.75px] tracking-[2px] sm:tracking-[2.5px] md:tracking-[3.30px]">
              <span className="block text-white font-light">
                FROM <span className="font-normal">INDIA</span>
              </span>
              <span className="block text-white font-light">
                TO THE <span className="font-normal">WORLD</span>
              </span>
            </h2>

            <p className="font-sans mt-4 sm:mt-6 text-neutral-400 text-sm sm:text-base md:text-lg font-light leading-5 sm:leading-6 tracking-wide sm:tracking-widest max-w-80">
              Shaping Robotics Across The Continents
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}