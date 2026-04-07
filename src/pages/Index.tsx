import HeroSection from "@/components/HeroSection";
import EventDetails from "@/components/EventDetails";
import DressCode from "@/components/DressCode";
import RSVPSection from "@/components/RSVPSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="wedding-site">
      <HeroSection />
      <EventDetails />
      <DressCode />
      <RSVPSection />
      <FooterSection />
    </main>
  );
};

export default Index;
