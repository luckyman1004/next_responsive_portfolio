import React from "react";

import FooterStyles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={FooterStyles.footer}>
      <hr />
      <div className={FooterStyles.container}>
        <div className="firsttext">
          <h2>Call</h2>
          <p>+21655555555</p>
        </div>
        <div className="secondtext">
          <h2>Email</h2>
          <p>contact@medhat.net</p>
        </div>
      </div>
      <div className={FooterStyles.secondcontainer}>
        <p>Innovating one project at a time</p>
        <ul>
          <li>
            <i className="fab fa-github"></i>
          </li>
          <li>
            <i className="fab fa-instagram"></i>
          </li>
          <li>
            <i className="fab fa-twitter"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
