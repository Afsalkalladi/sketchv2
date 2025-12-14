import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FutureSection from "./components/FutureSection";
import GlobalSection from "./components/GlobalSection";
import Team from "./components/Team";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <FutureSection />
      <GlobalSection />
      <Team />
      <Achievements />
      <Footer />
    </main>
  );
}
