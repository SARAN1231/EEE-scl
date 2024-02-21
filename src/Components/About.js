import React from "react";
// import AboutBackground from "../Assets/about-background.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import NewSlider from "./NewSlider";

const spancss = {
  color: "red",
  marginRight: "5px",
};
const About = () => {
  const youtubeChannelURL = "https://youtu.be/XK1ZEiuRh9s";

  return (
    <div className="about-section-container" style={{ marginTop: "8vh" }}>
      {/* <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container" style={{ borderRadius: '3vh', overflow: 'hidden', border: 'none', height: '50vh', marginRight: '5vw' }}>
      <iframe width="100%"
          height="100%" src="https://www.youtube.com/embed/x88M3LOKA6g?si=uGY7-CVQjWGDX1I6&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div> */}
      <NewSlider />
      <div className="right-dept">
        <div
          className="about-section-text-container"
          style={{ lineHeight: "1.5" }}
        >
          {/* <p className="primary-subheading">About</p> */}

          <strong>
            <p className="primary-text">
              - First Approval at <span style={spancss}>1996</span>
            </p>
            <p className="primary-text">
              - <span style={spancss}> 130</span> Placements offers (Academic
              Year 2022-23)
            </p>
            <p className="primary-text">
              - <span style={spancss}>2</span> CTS Best outgoind Student Award
            </p>
            <p className="primary-text">
              - <span style={spancss}>126</span> students achievers for the year
              2023-2024
            </p>
            <p className="primary-text">
              - <span style={spancss}>2</span> Best IEEE Student Chapter Awards
              & <br /> <span style={spancss}>2</span> International student
              Achivement Awards
            </p>
            <p className="primary-text">
              - <span style={spancss}>7</span> IEEE professional society
            </p>
            <p className="primary-text">
              - <span style={spancss}>1</span> ISTE Best Student Award
            </p>
            <p className="primary-text">
              - <span style={spancss}>2</span> INAE Awards &{" "}
              <span style={spancss}>2</span> SIH Winners
            </p>
            <p className="primary-text">
              - <span style={spancss}>15</span> Industrail MoU's
            </p>
            <p className="primary-text">
              - <span style={spancss}> 8</span> Consultancy Projects <br />-
              <span style={spancss}>7</span>
              funded Projects <br /> -<span style={spancss}>2</span> copyrights
            </p>
          </strong>
          <div className="about-buttons-container">
            <a
              href="https://stjosephs.ac.in/departmentsite/Old%20Archieves/eee/profile.html"
              target="_blank"
              style={{
                color: "white",
                textDecoration: "none",
              }}
              rel="noopener noreferrer"
            >
              <button className="secondary-button">Home</button>
            </a>
            <a
              href={youtubeChannelURL}
              target="_blank"
              rel="noopener noreferrer"
              className="watch-video-button"
              style={{
                textDecoration: "none",
              }}
            >
              <BsFillPlayCircleFill /> Watch Video
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
