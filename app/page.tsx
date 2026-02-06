import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FutureSection from "./components/FutureSection";
import GlobalSection from "./components/GlobalSection";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import { HomePageJsonLd } from "./components/StructuredData";

export default function HomePage() {
  return (
    <>
      <HomePageJsonLd />
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

        {/* Footer without magnetic scroll - scrolls naturally from Achievements */}
        <section className="w-full flex flex-col justify-end">
          <Footer />
        </section>

      </main>
    </>
  );
}