import { useState } from "react";
import { useEffect } from "react";

function ImageSlider() {
  const images = [
    "https://picsum.photos/id/1015/800/400",
    "https://picsum.photos/id/1016/800/400",
    "https://picsum.photos/id/1018/800/400",
    "https://picsum.photos/id/1025/800/400"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex(
      (currentIndex - 1 + images.length) % images.length
    );
  };

 useEffect(() => {
    const interval = setInterval(nextImage, 3000);

    return () => clearInterval(interval);
}, []);


  return (
    <div style={{ textAlign: "center" }}>
      <h2>Image Slider</h2>

      <img
        src={images[currentIndex]}
        alt="slider"
        width="800"
        height="400"
        style={{ objectFit: "cover" }}
      />

      <div>
        <button onClick={previousImage}>Previous</button>

        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
}

export default ImageSlider;