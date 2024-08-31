import React from "react";

import "../styles/Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <h2>Contact Us</h2>

        <div className="box">
          <div className="left">
            <div>
              <strong>Organizing Secretary, DAL'24</strong>
              <br />
              Department of Computer Science and Engineering,
              <br />
              MGM's College Of Engineering,
              <br />
              Nanded Bypass Rd, Hingoli Naka, Ambekar Nagar,
              <br />
              Nanded-Waghala, Nanded,
              <br />
              Maharashtra 431601
            </div>

            <div>
              <i class="bi bi-envelope-fill"> Email:</i>
              <p>
                <a
                  href="mailto:rajurkar_am@mgmcen.ac.in
            "
                >
                  rajurkar_am@mgmcen.ac.in
                </a>
                ,
                <a
                  href="mailto:bisen_rg@mgmcen.ac.in
            "
                >
                  bisen_rg@mgmcen.ac.in
                </a>
                <br />
                <a
                  href="mailto:bisen_rg@mgmcen.ac.in
            "
                >
                  pande_ns@mgmcen.ac.in
                </a>
              </p>
            </div>

            <div>
              <i class="bi bi-telephone-fill"> Phone:</i>
              <p>+91 9545971777, +91 9503889797</p>
            </div>
          </div>

          <iframe
            className="right"
            title="MGM's College Of Engineering"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.3542851823327!2d77.32167797520796!3d19.1797221820463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d6fbe138ad81%3A0x9e88bbe86ec52250!2sMGM&#39;s%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1711283863410!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
