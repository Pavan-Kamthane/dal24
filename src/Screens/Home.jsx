import React from "react";
import bgMain from "../img/Home Img.png";
import aboutConf from "../img/home/about conf1.png";
import "../styles/home.css";
import org1 from "../img/home/mgmlogo.jpeg";
import org2 from "../img/home/mysoore logo.jpg";
// import bg3 from "../img/BG3.jpeg";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Home = () => {
  return (
    <>
      <div className="banner">
        <img src={bgMain} alt="Image Will Load soon" />
      </div>
      <div className="about">
        <h2>About Conference</h2>
        <div className="aboutBox">
          <div className="left">
            <p>
              The Third International Conference on Data Analysis and Learning
              (DAL' 24), is jointly organized by Department of CSE, MGM’s COE,
              Nanded (Maharashtra) and Department of Studies in Computer
              Science, University of Mysore, Mysore, Karnataka, India. It will
              be held at MGM’s COE, Nanded on 30<sup>th</sup>
              and 31<sup>st</sup> December 2024. DAL' 24 aims to provide a
              platform for sharing innovative ideas, research stands as a
              distinguished annual conference dedicated to the realms of Data
              Analytics and Artificial Intelligence. Renowned for its
              exceptional quality, this conference serves as an excellent
              platform for students, academia, researchers, and industry
              professionals. The conference will feature technical paper
              sessions, poster sessions and keynote talks by eminent researchers
              around the world.
            </p>
          </div>

          <div className="right">
            <img src={aboutConf} alt="imagw" />
          </div>
        </div>
      </div>
      <div className="organize">
        <h2>Organizers</h2>
        <div className="orgs">
          <div className="org">
            <img src={org1} alt="MGM's COE" />
            <h3>MGM's COE, Nanded</h3>
          </div>
          <div className="org">
            <img src={org2} alt="Mysore University" />
            <h3>University of Mysore</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
