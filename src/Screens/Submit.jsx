import React from "react";
import "../styles/Submit.css";

const Submit = () => {
  return (
    <div className="Submit">
      <h2>Paper Submission</h2>
      <p>
        All researchers are requested to submit their original research papers
        through the given Microsoft CMT paper submission portal link only. No
        other alternatives of paper submission is entertained.
      </p>

      <button type="button" class="btn">
        Submit Your MenuScript
      </button>

      <h2>Submission Procedure for Abstract: </h2>

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
          paper suits and coninue by providing your name, affiliation, abstract
          and click on submit button.
        </li>
      </ul>

      <h2>Submission Procedure for Full Paper:</h2>

      <ul class="list-group">
        <li>Go through the link SUBMIT YOUR MANUSCRIPT</li>
        <li>
          Login with your email id and password if registered already to CMT
          paper submission portal, otherwise first register and then login.
        </li>
        <li>After successful login</li>
        <li>Click on create new submission</li>
        <li>
          Then select the track (click here for track details) to which your
          paper suits and coninue by providing your name, affiliation, abstract
          and click on submit button.
        </li>
      </ul>
    </div>
  );
};

export default Submit;
