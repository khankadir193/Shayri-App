import React, { useState } from "react";
import lefArrowImage from '../Image/LeftArrow.png';
import rightArrowImage from '../Image/RightArrow.png';


const Crousal = ({ items }) => {

  console.log('items...',items);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    const index = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    const index = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  

  return (
    <>
    <div className="carousel">
      <div class="left-right-arrow-container">
        <button
          style={{ border: "none", boxShadow: "none", background: "none" }}
          id="prevBtn"
          onClick={goToPrevSlide}
        >
          <img className="left-right-arrow" src={lefArrowImage} />
        </button>
        <button
          style={{ border: "none", boxShadow: "none", background: "none" }}
          id="nextBtn"
          onClick={goToNextSlide}
        >
          <img className="left-right-arrow" src={rightArrowImage} />
        </button>
      </div>
      <div className="carousel-content">
        <p>{items[currentIndex].text}</p>
      </div>
    </div>
    </>
  );
};

export default Crousal;
