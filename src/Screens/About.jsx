import React from "react";
import "../styles/About.css";
import mgmclgImg from "../img/home/mgm clg img.jpeg";
import cse from "../img/home/cse.png";
import mysooreclgimg from "../img/home/mysoore clg img.jpg";

const About = () => {
  return (
    <>
      <div className="about">
        <h2>About MGM's College Of Engineering, Nanded</h2>
        <div className="college">
          <img src={mgmclgImg} alt="Mgm" className="left" />
          <p className="right">MGM's College of Engineering, Nanded is one of the reputed institutions since 35 years. The institute caters for Under Graduate education for Civil, Computers, Mechanical, Electronics & Telecommunication, and Information Technology with four Post Graduate courses. The Research center in Mechanical and Computer Science Engineering provides the reinforcement for career building of engineers. The campus is completely Wi-fi enabled with State of art infrastructure and facilities. MGM's CoE Nanded, is the first NBA accredited institute in Marthwada region as well as it is a NAAC accredited institute.
            The Department of Computer Science and Engineering, since its inception, has maintained a steady growth in every sphere of its activities and plays an important role in bringing a vibrant and forward looking academic environment within the University. The Department offers quality undergraduate course as well as provides an excellent infrastructure and facilities for research and consultancy. The Department is a university recognized research center for Ph.D. in Computer Science & Engineering.</p>
        </div>

        <h2>Department of Computer Science & Engineering</h2>
        <div className="college reverse">
          <p className="right">
          The Department of Computer Science and Engineering was established in 1984. The
 Department, since its inception, has maintained a steady growth in every sphere of its activities
 and played an important role in bringing a vibrant and forward-looking academic environment.
 Department is offering high quality undergraduate and postgraduate Engineering courses as
 well as providing an excellent infrastructure and facilities for state of the art technical education
 and research. The Department has research center of Swami Ramanand Teerth Marathwada
 University, Nanded & Dr. Babasaheb Ambedkar Technological University, Lonere for Ph.D.
 in CSE.  The Department has received research grants of Rs. 48.7 Lakhs from different funding
 agencies such as BARC Mumbai, AICTE Delhi and AMUPMDC Mumbai.
<br />
 The Department of Computer Science & Engineering strives for excellence in creating,
 applying, and imparting knowledge in Computer Science and Engineering through
 comprehensive educational programs, research in collaboration with industry and government,
 dissemination through scholarly publications, and service to professional societies, the
 community, the State, and the Nation.
          </p>
          <img className="right" src={cse} alt="CSE" />
        </div>

        <h2>About University of Mysore, Mysore</h2>
        <div className="college">
          <img src={mysooreclgimg} alt="Mgm" className="left" />
          <p className="right">
            The University of Mysore was established on July 27, 1916. It is the
            sixth oldest in the country and the first in the state of Karnataka.
            Also, in a sense it is the first university of the country to be
            established outside the limits of the British India. The university
            was founded as a result of the efforts of the benevolent and
            visionary Maharaja of erstwhile Princely State of Mysore His
            Highness Shri Nalvadi Krishnaraja Wadiyar – IV (1884-1940), and the
            then Diwan Sir M. Visvesvaraya (1860-1962). It was the first
            University to be accredited by NAAC in 2000 with Five Star Status
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
