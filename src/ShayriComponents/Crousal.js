import React, { useState } from "react";
import lefArrowImage from "../Image/LeftArrow.png";
import rightArrowImage from "../Image/RightArrow.png";
import "./ShayriDesign.css";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  btnShadow: {
    border: "none",
    boxShadow: "none",
    background: "none",
  },

}));

const Crousal = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const classes = useStyles();

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
          <button className={classes.btnShadow} id="prevBtn" onClick={goToPrevSlide}>
            <img className="left-right-arrow" src={lefArrowImage} />
          </button>
          <button className={classes.btnShadow} id="nextBtn" onClick={goToNextSlide}>
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
