import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Superiority from "./components/Superiority"
import FAQSection from "./components/FAQSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Superiority/>
      <Slider />
      <ContactForm />
      <FAQSection/>
      <Footer />
    </>
  );
}

export default App;
