import { useState } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

function Slider() {
  const images = [image1, image2, image3];

  const [index, setIndex] = useState(0);

  const nextImage = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevImage = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div>
      <button onClick={prevImage}>Previous</button>

      <img src={images[index]} alt="slider" width="400" />

      <button onClick={nextImage}>Next</button>
    </div>
  );
}

export default Slider;