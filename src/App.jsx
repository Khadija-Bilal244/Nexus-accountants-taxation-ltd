import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Slider />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;




/*import './App.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} BrandName. All rights reserved.</p>
    </footer>
  );
}

function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <li><a href="#Home">Home</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Features">Features</a></li>
        <li><a href="#Careers">Careers</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Footer />
    </div>
  );
}*/