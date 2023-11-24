import React from "react";
import bgImage from "../Image/bg.jpg";
import "./ShayriDesign.css";
import { Button } from "@mui/material";
// import makeStyles from '@mui/material';
import { makeStyles } from "@mui/styles";
import Avatar from "@mui/material/Avatar";
import abdulkadirkhanyousufzai from "../Image/khankadir.jpeg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  customButton: {
    backgroundColor: "#f50057", // Change this to the desired background color
    color: "white", // Change this to the desired text color
    borderRadius: 20, // Change this to set border radius
    padding: "10px 20px", // Change this to set padding
    boxShadow: "none", // Remove the button shadow if desired
    "&:hover": {
      backgroundColor: "#ff4081", // Change this to the hover color
    },
  },
  large: {
    width: "300px !important",
    height: "300px !important",
    "&:hover": {
      transform: "scale(1.2)", // Example: Increase size on hover
      // Add other animation properties as needed
    },
    animation: "$spin 10s linear infinite", // Apply the spin animation for 10 seconds
  },
  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
  large2: {
    width: "300px !important",
    height: "300px !important",
    "&:hover": {
      transform: "scale(1.2)", // Example: Increase size on hover
      // Add other animation properties as needed
    },
    // animation: '$spin 10s linear infinite', // Apply the spin animation for 10 seconds
  },
}));

function HomeComponent() {
  const classes = useStyles();
  const [showAvatar, setShowAvatar] = useState(true);
  const navigatePage = useNavigate();

  useEffect(() => {
    // Hide the avatar after 10 seconds
    const timer = setTimeout(() => {
      setShowAvatar(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = (event) =>{
    console.log('clicked that functions ...');
    navigatePage('/shayri');
  }

  return (
    <div className="home-container">
      <div>
        {showAvatar ? (
          <Avatar
            alt="khankadir"
            src={abdulkadirkhanyousufzai}
            className={classes.large}
          />
        ) : (
          <Avatar
            alt="khankadir"
            src={abdulkadirkhanyousufzai}
            className={classes.large2}
          />
        )}
      </div>

      <div>
        <button className={classes.customButton} onClick={handleClick}>
          Getting Started
        </button>
      </div>
    </div>
  );
}

export default HomeComponent;
