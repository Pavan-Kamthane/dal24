import React from "react";
import "../styles/Submit.css";

const Submit = () => {
  const redirectToWebsite = () => {
    window.location.href = 'https://cmt3.research.microsoft.com/DAL2024'; 
  };

  return (
    <div className="Submit">
      <h2>Paper Submission</h2>
      <p>
        All researchers are requested to submit their original research papers
        through the given Microsoft CMT paper submission portal link only. No
        other alternatives of paper submission is entertained.
      </p>

      {/* <button type="button" className="btn" onClick={redirectToWebsite}>
        Submit Your manuscript
      </button> */}

      <h2>Submission procedure for Abstract: </h2>

      <ul>
        <li>Go through the link SUBMIT YOUR MANUSCRIPT</li>
        <li>
          Login with your email id and password if registered already to CMT
          paper submission portal, otherwise first register and then login.
        </li>
        <li>After successful login</li>
        <li>Click on create new submission</li>
        <li>
          Then select the track (click here for track details) to which your
          paper suits and continue by providing your name, affiliation, abstract
          and click on submit button.
        </li>
      </ul>

      <h2>Submission procedure for full paper:</h2>

      <ul className="list-group">
        <li>Go through the link SUBMIT YOUR MANUSCRIPT</li>
        <li>
          Login with your email id and password if registered already to CMT
          paper submission portal, otherwise first register and then login.
        </li>
        <li>After successful login</li>
        <li>Click on create new submission</li>
        <li>
          Then select the track (click here for track details) to which your
          paper suits and continue by providing your name, affiliation, abstract
          and click on submit button.
        </li>
      </ul>
    </div>
  );
};

export default Submit;
