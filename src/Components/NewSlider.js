import React, { useState, useEffect } from "react";
import image01 from "../Assets/EEE 10.jpg";
import image02 from "../Assets/EEE 110.jpg";
import image03 from "../Assets/EEE 120.jpg";
import image04 from "../Assets/EEE 130.jpg";
import image05 from "../Assets/EEE 140.jpg";
import image06 from "../Assets/EEE 150.jpg";
import image07 from "../Assets/EEE 160.jpg";
import image08 from "../Assets/EEE 170.jpg";
import image09 from "../Assets/EEE 180.jpg";
import image10 from "../Assets/EEE 190.jpg";
import image11 from "../Assets/EEE 20.jpg";
import image12 from "../Assets/EEE 210.jpg";
import image13 from "../Assets/EEE 30.jpg";
import image14 from "../Assets/EEE 50.jpg";

const NewSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageOpacity(0);
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % 11);
        setImageOpacity(1);
      }, 1500);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const getImageName = (index) => {
    const images = [
      image09,
      image07,
      image11,
      image03,
      image04,
      image12,
      image01,
      image06,
      image05,
      image08,
      image13,
      image10,
      image02,
      image14,
    ];
    return images[index];
  };

  const containerStyle = {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginTop: "5vh",
  };

  const imageStyle = {
    width: "auto",
    height: "auto",
    borderRadius: "10px",
    transition: "opacity 1s ease-in-out",
    opacity: imageOpacity,
  };

  return (
    <div style={containerStyle}>
      <img
        src={getImageName(imageIndex)}
        alt={`Image ${imageIndex}`}
        style={imageStyle}
      />
    </div>
  );
};

export default NewSlider;
