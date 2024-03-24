import React from "react";

const footerStyles = {
  background: "linear-gradient(45deg, #9500ff, rgb(99, 0, 146), #9500ff)",
  color: "white",
  textAlign: "center",
  padding: "10px",
  fontWeight: "bold",
};

const link = {
  color: "white",
  margin: "0 5px"
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
        </a>
      </p>
    </div>
  );
}

export default Footer;
