import React from "react";
import "../styles/header.css";
// import collegeLogo1 from "../img/home/springer.jpeg";
// import collegeLogo2 from "../img/home/mgmlogo.jpeg";
// import collegeLogo3 from "../img/home/mysoore logo.jpg";
// import NavbarComponent from "./NavbarComponent";

import BootstrapNavBar from "./BootstrapNavBar";
const Header = () => {
  return (
    <>
      <div className="header">
       
        <BootstrapNavBar />
      </div>
    </>
  );
};

export default Header;
