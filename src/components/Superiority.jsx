import { useState, useEffect } from "react";
import superiorityImage1 from "../assets/vision1.png";
import superiorityImage2 from "../assets/vision2.png";
import superiorityImage3 from "../assets/vision3.png";
import "../styles/Superiority.css";

function Superiority() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [superiorityImage1, superiorityImage2, superiorityImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="superiority-section">
      <div className="superiority-container">
        <div className="superiority-wrapper">
          <div className="superiority-text">
            <h2 className="superiority-title">Nexus Superiority Among Others</h2>
            <p>
               At Nexus, we believe every client deserves the attention and commitment of a trusted accounting partner.
               We take the time to understand your business, your goals, and your challenges, delivering tailored solutions
               that help you succeed. This client-first approach is what sets us apart.With UK tax legislation and compliance 
               requirements constantly evolving, we stay ahead of regulatory changes to provide accurate, practical, and timely
               advice. By combining expert knowledge with modern cloud-based accounting technology, we deliver real-time financial 
               insights, clear reporting, and proactive tax planning that help you make informed business decisions.Our services go
               beyond compliance. We help businesses improve financial performance, reduce unnecessary tax liabilities, avoid costly
               penalties, and maintain confidence that their accounts are managed in line with current UK regulations. Whether you're
                a startup, an established company, or a growing business, we provide reliable support tailored to your ambitions.
                At Nexus, our goal is simple to give you the financial clarity, strategic guidance, and peace of mind you need, 
                so you can focus on growing your business while we take care of the numbers.
            </p>
          </div>
          <div className="superiority-image">
            <div className="superiority-image-slider">
              <img 
                src={images[currentImageIndex]} 
                alt="Nexus Accountants Superiority" 
                className="superiority-slide-image"
                key={currentImageIndex}
              />
              <div className="superiority-dots">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`superiority-dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => goToImage(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Superiority;