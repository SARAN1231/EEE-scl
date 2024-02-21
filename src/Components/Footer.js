import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "blue",
    color: "white",
    textAlign: "center",
    padding: "10px",
    bottom: 0,
    marginLeft: "-7.5vw",
    width: "100vw",
  };

  return (
    <footer style={footerStyle}>
      All rights reserved <br />
      Department of EEE <br />
      St. Joseph's College of Engineering <br /> Design by {` `}
      <a
        href="https://www.linkedin.com/in/saran--p/ "
        style={{ color: "white", textDecoration: "none" }}
      >
        Saran{` `}
      </a>
      <a
        href="https://www.linkedin.com/in/stephan-f/ "
        style={{ color: "white", textDecoration: "none" }}
      >
        & Stephan
      </a>
      {/* <a href='https://www.linkedin.com/in/vijaybala7604/' target='_blank' style={{color: 'white'}}>VIJAY BALA A</a> */}
    </footer>
  );
};

export default Footer;
