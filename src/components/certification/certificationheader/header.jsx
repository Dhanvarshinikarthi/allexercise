import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="certificationheader_main">
      <h1>
        <span id="main">My</span>PortFolio
      </h1>
      <nav>
        <a href="#" id="home">
          Overview
        </a>
        <a href="#">Portfolio</a>
        <a href="#">Certification</a>
      </nav>
      <button>
        <h4>Hire Me</h4>
      </button>
    </div>
  );
};
export default Header;
