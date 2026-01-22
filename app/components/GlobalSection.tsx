import Image from "next/image";

export default function GlobalSection() {
  return (
    <section className="bg-black relative overflow-hidden h-screen min-h-[600px] sm:min-h-[700px] md:min-h-[882px] flex flex-col snap-start">

      {/* --- Background Gradients & Map --- */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 70%)",
          zIndex: 0,
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

      {/* --- Main Content Container --- */}
      <div className="w-full px-5 md:px-10 lg:px-[60px] relative z-10 flex-grow flex flex-col py-12 sm:py-16 md:py-20">

        {/* --- TOP: LOGOS --- */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-4 items-center opacity-80 mb-10 shrink-0 justify-items-center md:justify-items-start">
          <Image
            src="/images/trusted/keralastartupmission.svg"
            alt="Kerala Startup Mission"
            width={128}
            height={40}
            className="h-8 sm:h-10 w-auto object-contain"
            priority
          />
          <Image
            src="/images/trusted/rizins.svg"
            alt="Rizins"
            width={128}
            height={40}
            className="h-8 sm:h-10 w-auto object-contain"
            priority
          />
          <Image
            src="/images/trusted/dpiit.svg"
            alt="DPIIT"
            width={128}
            height={40}
            className="h-8 sm:h-10 w-auto object-contain"
            priority
          />
          <Image
            src="/images/trusted/makervillage.svg"
            alt="Maker Village"
            width={128}
            height={40}
            className="h-8 sm:h-10 w-auto object-contain"
            priority
          />
          <div className="hidden md:block">
            <Image
              src="/images/trusted/cusat.svg"
              alt="CUSAT"
              width={128}
              height={40}
              className="h-8 sm:h-10 w-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* --- MIDDLE: TEXT CONTENT --- */}
        <div className="flex-grow flex flex-col justify-center">
          {/* Removed strict max-w constraint that was forcing wrapping */}
          <div className="w-full max-w-3xl animate-slide-up">
            <h2 className="font-sans text-[32px] sm:text-[36px] md:text-[42px] lg:text-[54px] leading-[1.1] sm:leading-[1.2] tracking-[2px] sm:tracking-[3px] md:tracking-[4px] text-white font-light">

              {/* === LAYOUT 1: MOBILE (< md) === */}
              {/* Forces: 
                  Line 1: FROM INDIA 
                  Line 2: TO THE WORLD 
              */}
              <div className="block md:hidden">
                <span className="block whitespace-nowrap">
                  FROM <span className="font-normal">INDIA</span>
                </span>
                <span className="block whitespace-nowrap">
                  TO THE <span className="font-normal">WORLD</span>
                </span>
              </div>

              {/* === LAYOUT 2: DESKTOP (>= md) === */}
              {/* Forces: 
                  Line 1: FROM INDIA TO 
                  Line 2: THE WORLD 
              */}
              <div className="hidden md:block">
                <span className="block whitespace-nowrap">
                  FROM <span className="font-normal">INDIA</span> TO
                </span>
                <span className="block whitespace-nowrap">
                  THE <span className="font-normal">WORLD</span>
                </span>
              </div>

            </h2>

            <p className="font-sans mt-4 sm:mt-6 text-neutral-400 text-sm sm:text-base font-light leading-6 tracking-wide sm:tracking-widest max-w-80">
              Shaping Robotics Across Three Continents
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}