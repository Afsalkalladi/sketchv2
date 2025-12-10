import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FutureSection from "./components/FutureSection";
import GlobalSection from "./components/GlobalSection";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-gray-900 font-sans">
      <Navbar />
      <Hero />
      <FutureSection />
      <GlobalSection />
      <Footer />
    </main>
  );
}
