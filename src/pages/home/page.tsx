import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import WhatsAppButton from "@/components/feature/WhatsAppButton";
import Hero from "./components/Hero";
import Credibility from "./components/Credibility";
import Services from "./components/Services";
import MatchingProcess from "./components/MatchingProcess";
import HelperProfiles from "./components/HelperProfiles";
import SuccessStories from "./components/SuccessStories";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="w-full bg-background-50">
      <Navbar />
      <main>
        <Hero />
        <Credibility />
        <Services />
        <MatchingProcess />
        <HelperProfiles />
        <SuccessStories />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}