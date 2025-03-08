import facebook from "../assets/logo-facebook.svg";
import instagram from "../assets/logo-instagram.svg";
import linkedin from "../assets/logo-linkedin.svg";
import twitter from "../assets/logo-twitter.svg";
import youtube from "../assets/logo-youtube.svg";
import { IonIcon } from "@ionic/react";
const Footer = () => {
  return (
    <footer>
      <div className="footer-content mb">
        <p className="text md">©2025 Landing.</p>
        <div>
          <span className="logo">Landing</span>
        </div>
        <a href="#" className="btn-primary sm">
          By Now
        </a>
      </div>
      <hr className="mb" />
      <div className="footer-links">
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul className="social-links">
          <li>
            <a href="#">
              <img src={facebook} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={linkedin} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitter} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={youtube} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={instagram} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
