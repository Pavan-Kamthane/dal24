import React from "react";
import "../styles/Speaker.css";
import speaker1 from "../img/Committee/Dr. Geeta S. Lathkar.jpg";

const Speaker = () => {
  return (
    <div className="speakers">
      <h2>Speakers</h2>
      <div className="speakerBox">
        <div className="speaker">
          <img src={speaker1} alt="speaker" />
          <h3>Dr. Geeta S. Lathkar</h3>
        </div>
        <div className="speaker">
          <img src={speaker1} alt="speaker" />
          <h3>Dr. Geeta S. Lathkar</h3>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
