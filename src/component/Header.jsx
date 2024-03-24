import React from "react";
import "../styles/header.css";
import collegeLogo1 from "../img/home/springer.jpeg";
import collegeLogo2 from "../img/home/mgmlogo.jpeg";
import collegeLogo3 from "../img/home/mysoore logo.jpg";
// import NavbarComponent from "./NavbarComponent";

import BootstrapNavBar from "./BootstrapNavBar";
const Header = () => {
  return (
    <>
      <div className="header">
        {/* <p class="headerPara">Third International Conference on</p> */}
        {/* <h1 class="headerTitle">
          DAL 2024
        </h1>

        <div className="logo">
          <img className="side-logo" src={collegeLogo1} alt="" />
          <img className="side-logo" src={collegeLogo2} alt="" />
          <img className="side-logo" src={collegeLogo3} alt="" />
        </div> */}
        {/* <NavbarComponent /> */}
        <BootstrapNavBar/>
      </div>
    </>
  );
};

export default Header;
