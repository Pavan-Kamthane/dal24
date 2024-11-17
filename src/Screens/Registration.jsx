import React from "react";
import "../styles/Registration.css";
import zipFile from '../img/registration/Word+Template.zip'

const Registration = () => {
  return (
    <div className="Registration">
      <h2>Instructions for Registration</h2>

      <p>
        Based on the reviewer comments, all the accepted papers for presentation
        in the 3<sup>rd</sup> International Conference on Data Analytics &
        Learning (DAL’24), need
        to be registered on or before 25<sup>th</sup> Nov,2024.
      </p>

      <p class="bolder">
        To proceed with publishing your submission, you need to do the
        Registration on or before 25/11/2024 (Deadline for CRP, Payment)
      </p>

      <ol>
        <li>
          Submit the DAL'24 Camera Ready Paper (Paper Template Attached in
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

        <li>Payment screenshot/reference number with date</li>
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

        {/* add zip file and  link to download zip file */}
        <a href={zipFile} download="Word_Template.zip">
          {/* <button >Download Word Template</button> */}
          <i class="fa fa-download" aria-hidden="true"></i> Download Word Template
        </a>


      </p>

      <div className="boxb">
        <ul>
          <li>Payment Method(Account Transfer)</li>
          <li>Account Holder Name: MGMS COE RESEARCH DEVELOPEMENT</li>
          <li>A/C Number: 20067302358</li>
          <li>Bank Name: Bank Of Maharashtra</li>
          <li>Branch Name: Nanded</li>
          <li>IFSC Code: MAHB0000035</li>
          {/* <li>MICR CODE: ************</li> */}
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
        <li>After making the payment, please submit the details to the following email IDs:</li>
        <ul>
          <li><a href="mailto:vinaykumarn.rsh@compsci.uni-mysore.ac.in">vinaykumarn.rsh@compsci.uni-mysore.ac.in</a></li>
          <li><a href="mailto:icdal2024@gmail.com">icdal2024@gmail.com</a></li>
        </ul>
      </ol>
      <div className="boxb">
        <ul
          style={{
            listStyleType: "none",
          }}
        >
          <li>Thanks & Regards</li>
          <li>Organizing Secretary, International Conference DAL'24</li>
          <li>Mgm's College Of Engineering, Nanded</li>
          <li>Department of Computer Science and Engineering</li>
          <li>Mgm's College Of Engineering, Nanded Bypass Rd, Hingoli Naka, Ambekar Nagar, Nanded-Waghala, Nanded, Maharashtra 431601</li>
          <li>Email: rajurkar_am@mgmcen.ac.in, bisen_rg@mgmcen.ac.in </li>
          <li>Ph: +91 9545971777 </li>
        </ul>
      </div>
    </div>
  );
};

export default Registration;
