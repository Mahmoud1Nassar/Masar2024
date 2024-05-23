import React from "react";
import logo from "../../images/LogoKittyCorner.jpg";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  // Scroll Function to the About us Section 
  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById('aboutUsSection');
    if (aboutUsSection) {
      const offsetPosition = aboutUsSection.offsetTop - 200;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    // NavBar Element
    <div className="header">
      <ul>
        <li>
          <img src={logo} alt="Cat Logo" />
        </li>
        <li className="pop-up">
          {/* Link to SuccessfulStories page */}
          <Link to="/" className="navbar-link">
            <button className="add-kitten-button">
              Home
            </button>
          </Link>
        </li>
        <li className="pop-up">
          {/* Trigger handleShowModal function from props */}
          <button onClick={props.onClick} id="AboutUs" style={{marginRight:'130px'}}>
            Bring a Cat Home
          </button>
        </li>
        <li className="pop-up">
          {/* Link to SuccessfulStories page */}
          <Link to="/SuccessfulStories" className="navbar-link">
            <button className="add-kitten-button">
              Successfull Stories
            </button>
          </Link>
        </li>
      </ul>
      {/* Button to scroll to the About Us section */}
      <button id="AboutUs" onClick={scrollToAboutUs}>
        About Us
      </button>
    </div>
  );
}
