export default function Footer() {
  return (
    <footer className="bg-black text-white py-[clamp(2.5rem,5vw,5rem)] snap-start">
      <div className="w-full px-5 md:px-10 lg:px-[3.75rem]">
        {/* Top Divider Line */}
        <div className="w-full h-px bg-white/25 mb-[clamp(2rem,3vw,3.5rem)]" />

        {/* Main Content - Grid shifted to push content right */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 mb-[clamp(2rem,3vw,3.5rem)]">
          
          {/* Left Column: Brand Name & Description - Hidden on mobile */}
          <div className="hidden md:flex flex-col justify-start">
            <h2
              className="text-[clamp(1.5rem,2.2vw,2.5rem)] font-normal leading-[1.1] tracking-tight text-white mb-[clamp(1rem,1.5vw,1.5rem)]"
              style={{ fontFamily: "'Unbounded', sans-serif" }}
            >
              Sketch<sup className="text-[0.5em] align-super ml-0.5">&reg;</sup>
              <br />
              Robotics
            </h2>
            <p
              className="text-[clamp(0.75rem,0.85vw,0.95rem)] font-light leading-[1.7] text-neutral-400 max-w-[28rem]"
              style={{ fontFamily: "'Unbounded', sans-serif" }}
            >
              Empowering innovation with sustainable robotics solutions, crafted
              in India, transforming the world
            </p>
          </div>

          {/* Right Column: Anchored to the Right */}
          <div className="flex flex-col md:items-start md:ml-auto w-full max-w-xl">
            {/* Quick Links Group - Hidden on mobile */}
            <div className="hidden md:block w-full">
              <h3
                className="text-[clamp(0.8rem,0.95vw,1.1rem)] font-bold uppercase tracking-[0.15em] text-white mb-6"
                style={{ fontFamily: "'Unbounded', sans-serif" }}
              >
                Quick Links
              </h3>
              <div className="flex flex-wrap gap-x-10 gap-y-3">
                {[
                  { label: "About Us", href: "/#about" },
                  { label: "Solutions", href: "/solutions" },
                  { label: "Team", href: "/team" },
                  { label: "Careers", href: "/careers" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[clamp(0.75rem,0.85vw,0.95rem)] font-light text-neutral-400 hover:text-white transition-colors"
                    style={{ fontFamily: "'Unbounded', sans-serif" }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Middle Divider - Starts from text, gap on the right - Hidden on mobile */}
            <div className="hidden md:block w-[95%] h-px bg-white/15 my-10" />

            {/* Contact Info Group - Always visible, mobile number and email in single row */}
            <div className="w-full">
              <h3
                className="text-[clamp(0.8rem,0.95vw,1.1rem)] font-bold uppercase tracking-[0.15em] text-white mb-6"
                style={{ fontFamily: "'Unbounded', sans-serif" }}
              >
                Contact Info
              </h3>
              <div className="flex flex-row gap-x-8 gap-y-4 flex-wrap">
                <a
                  href="mailto:sketchrobotics@gmail.com"
                  className="text-[clamp(0.75rem,0.85vw,0.95rem)] font-light text-neutral-400 hover:text-white transition-colors"
                  style={{ fontFamily: "'Unbounded', sans-serif" }}
                >
                  sketchrobotics@gmail.com
                </a>
                <a
                  href="tel:+918100336622"
                  className="text-[clamp(0.75rem,0.85vw,0.95rem)] font-light text-neutral-400 hover:text-white transition-colors"
                  style={{ fontFamily: "'Unbounded', sans-serif" }}
                >
                  +91 8100336622
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="w-full h-px bg-white/25 mb-8" />

        {/* Bottom Bar: Copyright + Social */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <p
            className="text-[clamp(0.7rem,0.8vw,0.9rem)] font-light text-neutral-400 tracking-wide"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            &copy; 2025 Sketch Robotics | All Rights Reserved
          </p>

          <div className="flex items-center gap-6">
            <span
              className="text-[clamp(0.75rem,0.9vw,1.1rem)] font-bold uppercase tracking-[0.15em] text-white"
              style={{ fontFamily: "'Unbounded', sans-serif" }}
            >
              Let's Connected
            </span>
            
            <div className="flex gap-3">
                {/* X (Twitter) */}
                <a
                  href="https://x.com/sketchrobotics"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/sketch.robotics/"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.416 2.52c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/sketch-robotics-pvt-ltd/"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.217.792 24 1.771 24h20.451C23.2 24 24 23.217 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}