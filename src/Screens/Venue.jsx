import React from "react";
import "../styles/Venue.css";
import venue from ".././img/venue/conferance image.png";

function Venue() {
  return (
    <>
      <div className="venue">
        <h2>Venue</h2>
        <div className="venueBox">
          <div className="left">
            <h3>Venue Details</h3>
            <div>
              <p>
                <b>Address:</b> Sir M. Vishweshwaraiyah Conference Hall, MGM’s
                College of Engineering Nanded, Maharashtra, India
              </p>
            </div>

            <div>
              <p>
                <b>Phone:</b> <a href="tel:+919545971777">+91 9545971777</a>,
                <a href="tel:+919503889797">+91 9503889797</a>

              </p>
            </div>

            <div>
              <p>
                <b>Email:</b>
                <a
                  href="mailto:
            "
                >
                  rajurkar_am@mgmcen.ac.in
                </a>
                ,
                <br />
                <a
                  href="mailto:
            "
                >
                  bisen_rg@mgmcen.ac.in
                </a>
                ,
                <br />
                <a
                  href="mailto:
            "
                >
                  pande_ns@mgmcen.ac.in
                </a>
              </p>
            </div>
          </div>
          <img


          className="right" src={venue} alt="" />
        </div>
      </div>
    </>
  );
}

export default Venue;
