export default function Hero() {
  return (
    <section
      id="home"
      // h-dvh fixes the "jumping" address bar issue on mobile browsers
      className="relative h-dvh min-h-[640px] w-full overflow-hidden bg-black"
    >
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-poster.jpg"
          className="h-full w-full object-cover object-center"
        >
          <source src="/videos/output.webm" type="video/webm" />
          <source src="/videos/output.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Responsive Dark Overlay */}
      <div
        className="absolute inset-0 z-10 
        bg-gradient-to-t from-black via-black/80 to-transparent
        md:bg-gradient-to-r md:from-black md:via-black/60 md:to-transparent
        opacity-90"
      />

      {/* Content Container */}
      <div className="relative z-20 flex h-full w-full items-end pb-24 sm:pb-20 md:pb-32 lg:pb-40">
        {/* MATCHING LOGIC:
           1. Kept 'mx-auto' and 'max-w-7xl' to match Navbar width.
           2. CHANGED padding to 'px-4' to strictly match Navbar padding.
           3. REMOVED 'sm:px-6 md:px-10 lg:px-20' so text doesn't drift right.
        */}
        <div className="mx-auto flex w-full max-w-7xl px-4">
          <div className="max-w-xl flex flex-col justify-end transform translate-y-10 sm:translate-y-12 md:translate-y-16">
            {/* Main Heading */}
            <h1
              className="font-light text-white 
              text-[32px] leading-[1.1] tracking-[2px] 
              sm:text-[36px] sm:leading-[1.2] sm:tracking-[3px] 
              md:text-[42px] md:tracking-[4px] 
              lg:text-[48px]"
              style={{
                fontFamily: "'Unbounded', sans-serif",
              }}
            >
              <span className="block">Everything</span>
              <span className="block">Starts</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                From a Sketch
              </span>
            </h1>

            {/* Subtext */}
            <p
              className="mt-6 text-gray-300 text-sm font-light leading-6 tracking-wide 
              max-w-[90%] sm:max-w-96 opacity-90"
              style={{
                fontFamily: "'Unbounded', sans-serif",
              }}
            >
              Transforming ideas into reality through
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              cutting-edge robotics and AI solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
