import Navbar from "../components/Navbar";
import HeroSection from "../components/home/HeroSection";
import ServiceSection from "../components/home/ServiceSection";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <ServiceSection></ServiceSection>
    </div>
  );
}
