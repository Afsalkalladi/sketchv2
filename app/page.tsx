import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FutureSection from "./components/FutureSection";
import GlobalSection from "./components/GlobalSection";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <FutureSection />
      <GlobalSection />
      <Achievements />
      <Footer />
    </div>
  );
}
