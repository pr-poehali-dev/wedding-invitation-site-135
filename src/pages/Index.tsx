import HeroSection from "@/components/HeroSection";
import EventDetails from "@/components/EventDetails";
import DressCode from "@/components/DressCode";
import RSVPSection from "@/components/RSVPSection";
import ScheduleBanner from "@/components/ScheduleBanner";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="wedding-site">
      <HeroSection />
      <EventDetails />
      <DressCode />
      <RSVPSection />
      <ScheduleBanner />
      <FooterSection />
    </main>
  );
};

export default Index;