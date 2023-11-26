import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Crousal from "./Crousal";
import shayriContent from "./shayriContent.json";
import { useNavigate } from "react-router-dom";
import ApiCall from "./ApiCall";

const backgroundStyle = {
  backgroundImage: "url('../Image/romantic.jpeg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  width: "100%", // Set width to 100% for responsiveness
  height: "100vh", // Set initial height to cover the viewport

  /* Media query for smaller screens */
  "@media (max-width: 768px)": {
    height: "50vh", // Adjust height for smaller screens
  },
  /* Add more media queries as needed for different screen sizes */
};

const useStyles = makeStyles((theme) => ({
  backgroundStyle: {
    backgroundImage: "url('../Image/romantic.jpeg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%", // Set width to 100% for responsiveness
    height: "100vh", // You can adjust the height based on your requirement
  },

  shayariContainer: {
    textAlign: "center",
    padding: "32px", // Adjust padding as needed
    border: "2px solid purple",
    borderRadius: "3rem",
    // height: "45vh",
    width: "50%",
    height:'300px',
    overflow:"hidden",
    boxSizing:"border-box",
    "@media (max-width: 768px)": {
      height:'auto',
      // width:"-webkit-fill-available",
      width:"90%",
    },
  },
  shayariText: {
    fontSize: "24px", // Adjust font size as needed
    lineHeight: "1.5", // Adjust line height as needed
    fontFamily: "monospace",
    color: "snow",
    marginTop: "-1rem",
    "@media (max-width: 768px)": {
      fontSize: "10px", // Adjust height for smaller screens
      marginTop: "-3rem",

    },
  },
}));

function DisplayShayri() {
  const classes = useStyles();
  const navigatePage = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ApiCall();
        setData(response); // Update the state with the data received from ApiCall
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    //  apiResponse();
  }, [0]);

  const apiResponse = async () => {
    console.log("apiResponse...");
    const response = await ApiCall();

    console.log("response....From ParentComponetns...??", response);
    setData(response);
  };

  const goBackToHome = () => {
    navigatePage("/");
  };

  return (
      <div className="display-container">
        <div className={classes.shayariContainer}>
          <p className={classes.shayariText}>
            {data?.length > 0 && <Crousal items={data} />}
          </p>
        </div>
        <button onClick={goBackToHome} className="backBtn">
          Go Back to home
        </button>
      </div>
  );
}

export default DisplayShayri;

{
  /* this is the previous and next button for moving the content next and prev stage... */
}
{
  /* <div class="left-right-arrow-container">
            <button
              style={{border: "none", boxShadow: "none", background: "none"}}
              id="prevBtn"
              onClick={goToPrevSlide}
            >
              <img className="left-right-arrow" src={lefArrowImage} />
            </button>
            <button
              style={{border: "none", boxShadow: "none", background: "none"}}
              id="nextBtn"
              onClick={goToNextSlide}
            >
              <img className="left-right-arrow" src={rightArrowImage} />
            </button>
          </div> */
}
