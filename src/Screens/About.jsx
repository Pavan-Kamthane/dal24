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
          <p className="right">Mahatma Gandhi Mission, that started its journey in a modest way with a rural healthcare center at Nila and a hospital in Nanded, has emerged as a 5000-member family with more than 50 educational institutions, health-care centers and social-welfare units functioning under its umbrella at 5 centers i.e. Aurangabad, Nanded, Navi Mumbai, Noida and Parbhani. Spanning a period of 35 years, MGM establishments prove the deep faith of her management in the power of education that leads the society towards prosperity of the Nation. Mahatma Gandhi Mission has endeavored providing value-based education in all streams of knowledge like Engineering, Medicine, Dental, Nursing, Management, Law, Mass Communication & Journalism, Library Science, Computer Science, Biotechnology, Bioinformatics, Fine Art, Indian classical dance with state-of-the-art technology and infrastructure. Many new disciplines have also been included in the chain of establishments preserving the old. MGM’s University of Health Sciences has begun with exploring the new possibilities of imparting quality education. The founders of the trust are a group of ingenious Engineers, Doctors and Scientists having a high Career-profile and commitment to social interest. The Board of Management of the Trust is headed by Shri Kamalkishor N. Kadam, Member of Legislative Council of State of Maharashtra and Ex-minister of education.
          </p>
        </div>

        <h2>Department of Computer Science & Engineering</h2>
        <div className="college reverse">
          <p className="right">
            The Department of Computer Science and Engineering was established
            in 1984. The Department, since its inception, has maintained a
            steady growth in every sphere of its activities and played an
            important role in bringing a vibrant and Forward-looking academic
            environment within the University. It is a premier institution
            offering high quality undergraduate and postgraduate engineering
            courses as well as providing an excellent infrastructure and
            facilities for advanced research and consultancy. The Department of
            Computer Science & Engineering strives for excellence in creating,
            applying, and imparting knowledge in computer science and
            engineering through comprehensive educational programs, research in
            collaboration with industry and government, dissemination through
            scholarly publications, and service to professional societies, the
            community, the state, and the Nation. The Department has MoU with
            IIT Bombay for Distance Education Program, Oracle Corp. for WDP
            Program, IBM for PAP Program and Microsoft for Academic alliance.
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
