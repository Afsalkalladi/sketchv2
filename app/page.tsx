import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FutureSection from "./components/FutureSection";
import GlobalSection from "./components/GlobalSection";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* 1. h-dvh: Locks the container height to the viewport.
        2. overflow-y-auto: Moves the scrollbar inside this element.
        3. snap-y snap-mandatory: Activates the magnet.
      */}
      <main className="h-dvh w-full overflow-y-auto snap-y snap-mandatory scroll-smooth bg-black text-white">

        {/* Wrap each component in a Section to define the "slide" size */}
        <section className="h-dvh w-full snap-start snap-always">
          <Hero />
        </section>

        <section className="h-dvh w-full snap-start snap-always">
          <FutureSection />
        </section>

        <section className="h-dvh w-full snap-start snap-always">
          <GlobalSection />
        </section>

        <section className="h-dvh w-full snap-start snap-always">
          <Achievements />
        </section>

        {/* The Footer is tricky. 
           - 'h-dvh' forces it to be a full page (lots of empty space if content is short).
           - 'min-h-dvh' is safer, or 'h-auto' if you want it to snap to the bottom edge.
           For a strictly magnetic feel, wrapping it in h-dvh is consistent.
        */}
        <section className="h-dvh w-full snap-start snap-always flex flex-col justify-end">
          <Footer />
        </section>

      </main>
    </>
  );
}