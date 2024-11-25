import React from "react";
import "../styles/marquee.css";
import newImg from "../img/home/new.png";
import callForpaper1 from "../img/home/call for paper 1.jpg";
import callForpaper2 from "../img/home/call for paper 2.jpg";
import callForpaper3 from "../img/home/extended call for paper.png";

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <p
          style={{
            margin: "0px",
            padding: "0px 25px",
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "white",
          }}
        >
          Submission of Camera Ready Paper and Registration date extended till 5th December 2024        </p>
        <p
          style={{
            margin: "0px",
            padding: "0px 25px",
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "white",
          }}
        >
          Detail schedule of the Conference will be updated soon        </p>
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
          <strike>

            Paper Submission has been Closed
          </strike>
        </p>
        <p
          style={{
            margin: "0px 30px",
            padding: "0px",
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "white",
          }}
        >
          <strike>

            Paper Acceptance Notification: 30 October 2024
          </strike>
        </p>
      </div>
    </div>
  );
};

export default Marquee;