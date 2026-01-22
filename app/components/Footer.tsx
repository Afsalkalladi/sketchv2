import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 sm:py-16 border-t border-white/10 snap-start">
      <div className="w-full px-5 md:px-10 lg:px-[60px]">
        {/* Main Content Section: Split into 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 mb-12 items-start">
          {/* Left Column: Logo & Tagline */}
          <div className="max-w-lg">
            <div className="mb-6">
              <Image
                src="/images/colored-logo.png"
                alt="Sketch Robotics"
                width={200}
                height={65}
                className="w-[180px] h-auto object-contain mx-0"
                priority
              />
            </div>
            <p
              className="text-sm sm:text-base font-light leading-relaxed text-gray-200"
              style={{ fontFamily: "'Unbounded', sans-serif" }}
            >
              Empowering innovation with sustainable robotics solutions, crafted
              in India, transforming the world
            </p>
          </div>

          {/* Right Column: Contact Info */}
          <div className="flex flex-col items-start md:items-end md:justify-self-end">
            <h3
              className="text-base font-bold uppercase tracking-wider mb-6"
              style={{ fontFamily: "'Unbounded', sans-serif" }}
            >
              Contact Info
            </h3>

            <div
              className="space-y-2 mb-6 text-sm font-light text-gray-200"
              style={{ fontFamily: "'Unbounded', sans-serif" }}
            >
              <a
                href="mailto:sketchrobotics@gmail.com"
                className="block hover:text-white transition-colors"
              >
                sketchrobotics@gmail.com
              </a>
              <a
                href="tel:+918157858569"
                className="block hover:text-white transition-colors"
              >
                +91 8157858569
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {/* X (Twitter) */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
              >
                <svg
                  className="w-5 h-5 fill-white"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
              >
                <svg
                  className="w-5 h-5 fill-white"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.217.792 24 1.771 24h20.451C23.2 24 24 23.217 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
              >
                <svg
                  className="w-5 h-5 fill-white"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.416 2.52c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-white/20 mb-8" />

        {/* Bottom Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <p
            className="text-white font-light text-sm"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            © 2025 Sketch Robotics | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
