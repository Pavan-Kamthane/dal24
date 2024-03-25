import React from "react";
import "../styles/Registration.css";

const Registration = () => {
  return (
    <div className="Registration">
      <h2>Instructions for Registration</h2>

      <p>
        Based on the Reviewer comments, all the Accepted Papers for presentation
        in the 3<sup>rd</sup> International Conference on Data Analytics &
        Learning (DAL’24), 27<sup>th</sup> & 28<sup>th</sup> December 2024 need
        to be registered on or before 25<sup>th</sup> Nov,2024.
      </p>

      <p class="bolder">
        To proceed with publishing your submission, you need to do the
        Registration on or before 25/11/2024 (Deadline for CRP, Payment)
      </p>

      <ol>
        <li>
          Submit the IC DAL'24 Camera Ready Paper (Paper Template Attached in
          link) (CRP in
          <a href="/registration" class="links">
            MS Word{" "}
          </a>
          /
          <a href="/registration" class="links">
            Latex format only
          </a>
          )
        </li>

        <li>Payment Screenshot/Reference Number with Date</li>
        <li>
          Kindly check the plagiarism report, reduce the similarity index to
          less than or equal to 15%.
        </li>
        <li>
          Reviewer’s comments will be enabled shortly for those who have not
          able to view the comments.
        </li>
      </ol>

      <p class="bolder">
        Authors' instructions:{" "}
        <a href="/registration" class="links">
          {" "}
          Click Here
        </a>
      </p>

      <div className="boxb">
        <ul>
          <li>Payment Method(Account Transfer)</li>
          <li>Account Holder Name: Mgm's College Engineering, Nanded</li>
          <li>A/C Number: **********</li>
          <li>Bank Name: Bank Of Maharashtra</li>
          <li>Branch Name: Nanded</li>
          <li>IFSC Code: *********</li>
          <li>MICR CODE: ************</li>
        </ul>
      </div>
      <p className="bolder">Registration Fees</p>
      <ul>
        <li>Research Scholars <b>₹ 6,000/-</b> (Need to provide the ID Proof of the Institution)</li>
        <li>Industry & Academicians <b>₹ 8,000/-</b></li>
        <li>Foreign Nationals <b>100$</b></li>
        <li>Poster Presentation/Participation - <b>₹ 2,000</b></li>
      </ul>
      <p className="bolder">Note:</p>
      <ol>
        <li>The authors must present their paper at the conference venue(offline mode); without the presentation, the accepted paper will not be forwarded/published to Springer.</li>
        <li>Submit the CRC to CMT Microsoft portal</li>
        <li>After the payment, submit the details to following google form <a href="/registration" className="links">Click Here</a></li>
      </ol>
      <div className="boxb">
        <ul>
          <li>Thanks & Regards</li>
          <li>Organizing Secretary, International Conference DAL'24</li>
          <li>Mgm's College Of Engineering, Nanded</li>
          <li>Department of Computer Science and Engineering</li>
          <li>Mgm's College Of Engineering, Nanded Bypass Rd, Hingoli Naka, Ambekar Nagar, Nanded-Waghala, Nanded, Maharashtra 431601</li>
          <li>Email: rajurkar_am@mgmcen.ac.in, bisen_rg@mgmcen.ac.in, pande_ns@mgmcen.ac.in</li>
          <li>Ph: +91 9545971777</li>
        </ul>
      </div>
    </div>
  );
};

export default Registration;
