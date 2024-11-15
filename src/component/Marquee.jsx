import React from "react";
// import "../styles/marquee.css";
// import newImg from "../img/home/new.png";
// import callForpaper1 from "../img/home/call for paper 1.jpg";
// import callForpaper2 from "../img/home/call for paper 2.jpg";
import callForpaper3 from "../img/home/extended call for paper.png";

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <a
          href={callForpaper3}
          download="extended call for paper.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* img */}
          {/* <img src={newImg} alt="new" /> */}
          <strike
            style={{
              textDecoration: "line-through",
              textShadow: "0px 0px 10px black",
              fontSize: "clamp(16px, 2.5vw, 20px)",
            }}
          >
            Extended Call for Papers
          </strike>
        </a>
        <p
          style={{
            margin: "0px",
            padding: "0px",
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "white",
          }}
        >
          Paper Submission has been Closed
        </p>
        <p
          style={{
            margin: "0px 30px",
            padding: "0px",
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "white",
          }}
        >
          Paper Acceptance Notification: 30 October 2024
        </p>
      </div>
    </div>
  );
};

export default Marquee;