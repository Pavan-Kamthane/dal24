import React from "react";
import bgMain from "../img/image.png";
import aboutConf from "../img/home/about conf1.jpg";
import "../styles/home.css";
import org1 from "../img/home/mgmlogo.jpeg";
import org2 from "../img/home/mysoore logo.jpg";
import Carousel from "react-bootstrap/Carousel";
import bg1 from "../img/home/mgm clg img.jpeg";
import bg2 from "../img/home/photo4.jpg";
// import bg3 from "../img/BG3.jpeg";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

// const images = [
//   {
//     original: "https://picsum.photos/id/1018/1000/600/",
//     thumbnail: "https://picsum.photos/id/1018/250/150/",
//     description: "A picture of a dog",
//     originalHeight: 720,
//     originalWidth: 960,
//     thumbnailHeight: 100,
//     thumbnailWidth: 100,
//     // fullscreen: true,
//   },
//   {
//     original: "https://picsum.photos/id/1015/1000/600/",
//     thumbnail: "https://picsum.photos/id/1015/250/150/",
//     description: "A picture of a city",
//     originalHeight: 720,
//     originalWidth: 960,
//     thumbnailHeight: 100,
//     thumbnailWidth: 100,
//   },
//   {
//     original: "https://picsum.photos/id/1019/1000/600/",
//     thumbnail: "https://picsum.photos/id/1019/250/150/",
//     description: "A picture of a forest",
//     originalHeight: 700,
//     originalWidth: 2000,
//     thumbnailHeight: "100",
//     thumbnailWidth: 100,
//   },
// ];

const Home = () => {
  return (
    <>
      {/* 
        caresoule
      */}

      <div className="banner">
        <img src={bgMain} alt="Banner" />
      </div>
      <div className="about">
        <h2>About Conference</h2>
        <div className="aboutBox">
          <div className="left">
            <p>
              The Third International Conference on Data Analysis and Learning
              (ICDAL2024), is jointly organized by Department of CSE, MGM’s COE,
              Nanded (Maharashtra) and Department of Studies in Computer
              Science, University of Mysuru, Mysuru, Karnataka, India. It will
              be held at MGM’s COE, Nanded on 30<sup>th</sup>
              and 31<sup>st</sup> December 2024. ICDAL aims to provide a
              platform for sharing innovative ideas, research stands as a
              distinguished annual conference dedicated to the realms of Data
              Analytics and Artificial Intelligence. Renowned for its
              exceptional quality, this conference serves as an excellent
              platform for students, academia, researchers, and industry
              professionals. The conference will feature technical paper
              sessions, poster sessions and keynote talks by eminent researchers
              from around the world.
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
