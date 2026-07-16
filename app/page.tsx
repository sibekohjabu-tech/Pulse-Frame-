import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import WhySubscription from "@/components/WhySubscription";
import Pricing from "@/components/Pricing";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-pulse-bg">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <WhySubscription />
      <Pricing />
      <ContactCTA />
      <Footer />
    </main>
  );
}
