import React from 'react'
import ImageSlider from './ImageSlider';
import '../css/slider.css'
const Slider = () => {
    const slides = [
        { url: "http://localhost:3000/image-1.jpg", title: "beach" },
        { url: "http://localhost:3000/image-2.jpg", title: "boat" },
        { url: "http://localhost:3000/image-3.jpg", title: "forest" },
        { url: "http://localhost:3000/image-4.jpeg", title: "city" },
        { url: "http://localhost:3000/image-5.jpeg", title: "italy" },
      ];
      const containerStyles = {
        width: "1270px",
        height: "340px",
        margin: "0 auto",
        boxShadow: "1px 2px #888888"
      };
      return (
        <div>
          <div style={containerStyles}>
            <ImageSlider slides={slides} />
          </div>
        </div>
      );
}

export default Slider