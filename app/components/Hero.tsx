export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-black"
    >
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-center"
        >
          <source src="/videos/output.webm" type="video/webm" />
          <source src="/videos/output.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay – stronger on left, subtle on right */}
      <div
        className="absolute inset-0 opacity-95"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,1) 15%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Top gradient bar for navbar blending (optional, kept from your code) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-black" />

      {/* Content Container */}
      {/* UPDATED: Changed 'items-center' to 'items-end' and added 'pb' to position text at bottom-left */}
      <div className="relative z-10 flex h-full w-full items-end pb-24 md:pb-32 lg:pb-40">
        <div className="mx-auto flex w-full max-w-7xl px-6 md:px-10 lg:px-20">
          <div className="max-w-xl flex flex-col justify-end">
            {/* Main Heading */}
            <h1
              className="font-light text-white text-[36px] sm:text-[42px] md:text-[48px] leading-[1.2] tracking-[4px]"
              style={{
                fontFamily: "'Unbounded', sans-serif",
              }}
            >
              <span className="block">Everything</span>
              <span className="block">Starts</span>
              <span className="block">From a Sketch</span>
            </h1>

            {/* Subtext */}
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
