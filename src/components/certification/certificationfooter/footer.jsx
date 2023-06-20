import React from "react";
import "./footer.css";
import email from "../../../assets/icons/email.gif";
import twitter from "../../../assets/icons/twitter.png";
import fb from "../../../assets/icons/facebook.png";
import whatsapp from "../../../assets/icons/whatsapp.png";
import instagram from "../../../assets/icons/instagram.png";
import linkedin from "../../../assets/icons/linkedin.png";
import skype from "../../../assets/icons/skype.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer_main">
      <div className="footerimage">
        <button>
          <img src={twitter} alt="twitter" />{" "}
        </button>
        <button>
          <img src={fb} alt="fb" />
        </button>

        <button>
          <img src={whatsapp} alt="whatsapp" />
        </button>
        <button>
          <img src={instagram} alt="instagram" />
        </button>
        <button>
          <img src={linkedin} alt="linkedin" />
        </button>
        <button>
          <img src={skype} alt="skype" />
        </button>
      </div>
      <div className="links">
        <div className="overviewlinks">
          <nav>
            <p>
              <i className="arrow right"></i>
              <a href="#"> Overview</a>
            </p>
            <p>
              <i className="arrow right"></i>
              <a href="#aboutmepage"> About me</a>
            </p>
            <p>
              <i className="arrow right"></i>
              <a href="#projectspagecards"> Projects</a>
            </p>
          </nav>
        </div>
        <div className="certificationlinks">
          <nav>
            <p>
              <i className="arrow right"></i>
              <a href="#"> Certification</a>
            </p>
            <p>
              <i className="arrow right"></i>
              <a href="#educationpage"> Education</a>
            </p>
            <p>
              <i className="arrow right"></i>
              <a href="#skillspage"> Skills</a>
            </p>
          </nav>
        </div>
        <div className="portfoliolinks">
          <nav>
            <p>
              <i className="arrow right"></i>
              <a href="#"> Portfolio</a>
            </p>
            <p>
              <i className="arrow right"></i>
              <a href="#projectsmainpage"> Projects</a>
            </p>
            <p>
              <i className="arrow right"></i>
              <a href="#reviewspage"> Reviews</a>
            </p>
          </nav>
        </div>
        <div className="projectslistitem">
          <nav>
            <p>
              <i className="arrow right"></i>
              <a href="#"> Media Lander</a>
            </p>
            <p>
              <i className="arrow right"></i>
              <a href="#"> Newsfeed Profile</a>
            </p>
            <p>
              <i className="arrow right"></i>
              <a href="#"> Social Media</a>
            </p>
          </nav>
        </div>
      </div>
      <p id="email">
        <img src={email} alt="email" /> <a href="#">dhankarthi1708@gmail.com</a>
      </p>
    </div>
  );
};
export default Footer;
