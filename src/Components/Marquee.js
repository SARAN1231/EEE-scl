import React from "react";
import "./Marquee.css";
import cognizantImage from "../Assets/cognizant.png";
import wiproImage from "../Assets/wipro.png";
import mindtreeImage from "../Assets/mindtree.png";
import ciscoImage from "../Assets/cisco.png";
import zohoImage from "../Assets/zoho.png";
import accentureImage from "../Assets/accenture.png";
import adobeImage from "../Assets/adobe.png";
import avasoftImage from "../Assets/avasoft.png";
import soliton from "../Assets/soliton logo.png";
import siemen from "../Assets/siemens.png";
import jsw from '../Assets/jsw.png'
import bosch from '../Assets/Bosch-Logo.jpg'
import renault from '../Assets/renault nissan.png'
import kaar from '../Assets/kaar.png'
const MarqueeComponent = () => {
  return (
    <div className="marquee-container">
      <h2 className="marquee-heading" style={{ fontSize: "3rem" }}>
        Our Reputable Recruiters
      </h2>
      <div className="marquee-content">
        <div className="marquee-item">
          <img src={cognizantImage} alt="Cognizant" />
        </div>
        <div className="marquee-item">
          <img src={wiproImage} alt="Wipro" />
        </div>
        <div className="marquee-item">
          <img src={mindtreeImage} alt="Mindtree" />
        </div>
        <div className="marquee-item">
          <img src={ciscoImage} alt="Cisco" />
        </div>
        <div className="marquee-item">
          <img src={zohoImage} alt="Zoho" />
        </div>
        <div className="marquee-item">
          <img src={accentureImage} alt="Accenture" />
        </div>
        <div className="marquee-item">
          <img src={adobeImage} alt="Adobe" />
        </div>
        <div className="marquee-item">
          <img src={avasoftImage} alt="Avasoft" />
        </div>
        <div className="marquee-item">
          <img src={soliton} alt="Avasoft" />
        </div>
        <div className="marquee-item">
          <img src={siemen} alt="Avasoft" />
        </div>
        <div className="marquee-item">
          <img src={jsw} alt="Avasoft" />
        </div>
        <div className="marquee-item">
          <img src={bosch} alt="Avasoft" />
        </div>
        <div className="marquee-item">
          <img src={renault} alt="Avasoft" />
        </div>
        <div className="marquee-item">
          <img src={kaar} alt="Avasoft" />
        </div>
      </div>
    </div>
  );
};

export default MarqueeComponent;
