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
        <a
          href={callForpaper1}
          download="Call_for_Papers_1.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strike
            style={{
              // fontSize: "20px",
              // color: "red",
              textDecoration: "line-through",
              textShadow: "0px 0px 10px black",
              // textShadow: "0px 0px 10px red",
            }}
          >
            Call for Papers
          </strike>
        </a>
        <a
          href={callForpaper2}
          download="Call_for_Papers_2.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* img */}
          <strike
            style={{
              // fontSize: "20px",
              // color: "red",
              textShadow: "0px 0px 10px black",
              // textShadow: "0px 0px 10px red",
            }}
          >
            Second Call for Papers
          </strike>
        </a>
        <a
          href={callForpaper3}
          download="extended call for paper.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* img */}
          <img src={newImg} alt="new" />
          Extended Call for Papers
        </a>
      </div>
    </div>
  );
};

export default Marquee;
