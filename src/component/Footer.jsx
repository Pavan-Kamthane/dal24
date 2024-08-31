import React from "react";
import '../styles/footer.css'



function Footer() {
  return (
    <div className="footer">
      <p>&copy; 2024 All rights reserved | DAL 2024 | MGMCOE, Nanded</p>
      <p>
        Created By:{" "}
        <a  href="https://in.linkedin.com/in/pavankamthane">
          Pavan Kamthane,
        </a>
        
        <a  href="https://in.linkedin.com/in/atharva-inamdar">
        Atharva Inamdar,
        </a>
        <a  href="https://in.linkedin.com/in/vedant-kahalekar">
        Vedant Kahalekar,
        </a>
        <a  href="https://in.linkedin.com/in/pranav-kalaskar-588a1a233">
        Pranav Kalaskar
        </a>
      </p>
    </div>
  );
}

export default Footer;
