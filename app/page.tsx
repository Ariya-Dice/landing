import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Demo from "@/components/Demo";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks"; // Import HowItWorks
import WhyChooseDayPay from "@/components/WhyChooseDayPay"; // Import WhyChooseDayPay
import Comparison from "@/components/Comparison";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks /> {/* Add HowItWorks component */}
      <WhyChooseDayPay /> {/* Add WhyChooseDayPay component */}
      <Features />
      <Demo />
      <Pricing />
      <Comparison />
      <Footer />
    </main>
  );
}