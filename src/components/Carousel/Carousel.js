import React, { useState } from "react";
import "./Carousel.scss";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import Slide from "./Slide";

const Carousel = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleLeft = () => {
    if (currentSlide === 0) {
      setCurrentSlide(data.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleRight = () => {
    if (currentSlide === data.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <div className="carousel">
      <ArrowLeft onLeft={handleLeft} />
      {data.map((item, i) => (
        <Slide key={item.id} index={i} currentSlide={currentSlide}>
          {item.content}
        </Slide>
      ))}

      <ArrowRight onRight={handleRight} />
    </div>
  );
};

export default Carousel;

