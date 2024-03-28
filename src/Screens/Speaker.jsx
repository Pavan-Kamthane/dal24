import React from "react";
import "../styles/Speaker.css";
import speaker1 from "../img/speaker/Dr. Venkat N. Gudivada.png";
import speaker2 from "../img/speaker/Dr. Sumantra Dutta Roy.png";
import speaker3 from "../img/speaker/Dr. K. C. Santosh .png";
import speaker0 from "../img/speaker/default.jpg";



const Speaker = () => {
  return (
    <div className="speakers">
      <h2>Speakers</h2>
      <div className="speakerBox">
        <div className="speaker">
          <img src={speaker1} alt="speaker" />
          <h3>Dr. Venkat N. Gudivada</h3>
        </div>
        <div className="speaker">
          <img src={speaker2} alt="speaker" />
          <h3>Dr. Sumantra Dutta Roy</h3>
        </div>
        <div className="speaker">
          <img src={speaker3} alt="speaker" />
          <h3>Dr. K. C. Santosh </h3>
        </div>
        <div className="speaker">
          <img src={speaker0} alt="speaker" />
          <h3>Ms. Punitha </h3>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
