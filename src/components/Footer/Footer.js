import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__container">
          <div className="footer__column">
            <div className="footer__widget">
              <h4>About Blood Hub</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="footer__column">
            <div className="footer__link">
              <h4>Information</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Customer Service</a>
                </li>
                <li>
                  <a href="#">Our Sitemap</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Delivery Information</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__column">
            <div className="footer__link-contact">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <p>
                    <i className="fas fa-map-marker-alt"></i>Address: Michael
                    I. Days 3756 <br /> Preston Street Wichita, KS 67213{" "}
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fas fa-phone-square"></i>Phone:{" "}
                    <a href="tel:+1-888705770">+1-888 705 770</a>
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fas fa-envelope"></i>Email:{" "}
                    <a href="mailto:contactinfo@gmail.com">
                      contactinfo@gmail.com
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
