import Hero from "./Hero";
import HeroSlogan from "./HeroSlogan";
import Superiority from "./Superiority";
import Slider from "./Slider";
import ContactForm from "./ContactForm";
import FAQSection from "./FAQSection";
import PopularServices from "./PopularServices";
import ImpactStats from "./ImpactSales";
import Sectors from "./Sectors";
import GdprTrusted from "./GdprTrusted";
import Team from "./Team";
import "../styles/Home.css";
function Home() {
  return (
    <>
      <Hero />
      <HeroSlogan />
      <Superiority />
      <PopularServices/>
      <ImpactStats/>
      <Sectors/>
      <GdprTrusted/>
      <Team/>
      <Slider />
      <FAQSection />
      <ContactForm />
    </>
  );
}

export default Home;