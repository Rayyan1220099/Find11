import Image from "next/image";
import HeroSection from "./components/hero";
import Price from "./components/subscriptionplan";
import TestimonialSection from "./components/testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Price />
       <TestimonialSection/>
    </div>
  );
}
