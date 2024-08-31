import React from "react";

const footerStyles = {
  background: "linear-gradient(45deg, #6d53ad, #5a3d99, #6d53ad)",
  color: "white",
  textAlign: "center",
  padding: "10px",
  fontWeight: "bold",
  height:  "76px",
};

const link = {
  color: "white",
  textDecoration: "none",
  padding:  "0 10px",
  marginTop:  "-5px",

};

function Footer() {
  return (
    <div style={footerStyles}>
      <p>&copy; 2024 All rights reserved | DAL 2024 | MGMCOE, Nanded</p>
      <p>
        Created By:{" "}
        <a style={link} href="https://in.linkedin.com/in/pavankamthane">
          Pavan Kamthane
        </a>
        , 
        <a style={link} href="https://in.linkedin.com/in/atharva-inamdar">
        Atharva Inamdar  
        </a>,
        <a style={link} href="https://in.linkedin.com/in/vedant-kahalekar">
        Vedant Kahalekar
        </a>,
        <a style={link} href="https://in.linkedin.com/in/pranav-kalaskar-588a1a233">
        Pranav Kalaskar
        </a>
      </p>
    </div>
  );
}

export default Footer;
