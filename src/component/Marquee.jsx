import React from "react";
import "../styles/marquee.css";
import newImg from '../img/home/new.png'
import callForpaper1 from '../img/home/call for paper 1.jpg'
import callForpaper2 from '../img/home/call for paper 2.jpg'

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        
        <a href={callForpaper1} download="Call_for_Papers_1.jpg" target="_blank" rel="noopener noreferrer">
          Call for Papers
        </a>
        <a href={callForpaper2} download="Call_for_Papers_2.jpg" target="_blank" rel="noopener noreferrer">
        {/* img */}
        <img src={newImg} alt="new" />
        
          Second Call for Papers
        </a>
        
      </div>
    </div>
  );
};

export default Marquee;
