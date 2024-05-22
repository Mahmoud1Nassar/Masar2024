
import React from "react";
import "./Footer.css";
import imageF from "../../images/f.png";
import imageI from "../../images/i.png";
import imageT from "../../images/t.png";
import imageE from "../../images/e.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p style={{fontSize:"20px"}}>All rights are reserved © Powered by Masar 2024</p>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com/">
            <img alt="hello" src={imageF}></img>
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
          <img alt="hello" src={imageT}></img>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img alt="hello" src={imageI}></img>
          </a>
          <a href="https://www.gmail.com/" target="_blank" rel="noopener noreferrer">
          <img alt="hello" src={imageE}></img>
          </a>
        </div>
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to Top
          </button>
      </div>
    </footer>
  );
}
