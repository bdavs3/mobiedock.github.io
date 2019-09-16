import React from "react";
import logo from "../images/mobiedock.png";

import "./Footer.css";

const FooterPage = () => {
  return (
    <div className="footer bg-black py-3">
      <p>
        Website created by{" "}
        <a href="https://itsemshoji.github.io">Emily Shoji</a> and
        <a href="https://danicobryan.github.io"> Danico Pidlaoan</a>
      </p>
      <a href="#home">
        <img src={logo} alt="logo" />
      </a>
    </div>
  );
};

export default FooterPage;
