import React from "react";
import logo from "../images/mobiedock.png";

import './Footer.css';

const FooterPage = () => {
  return (
    <div className="footer bg-black py-3">
        <a href="#home"><img src={logo} alt="logo"/></a>
    </div>
  );
}

export default FooterPage;
