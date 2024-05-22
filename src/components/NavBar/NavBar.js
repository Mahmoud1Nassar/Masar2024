import React from "react";
import logo from "../../images/LogoKittyCorner.jpg";
import "./NavBar.css";

export default function NavBar(props) {

// Scroll Function to the About us Section 
  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById('aboutUsSection');
    if (aboutUsSection) {
      const offsetPosition = aboutUsSection.offsetTop -  200;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };


  return (
    // NaveBar Element
    <div className="header">
      <ul>
        <li>
          <img src={logo} alt="Cat Logo" />
        </li>
        <li className="pop-up">
          {/* props came from the Home Component to open the modal */}
          <button onClick={props.onClick} className="add-kitten-button">
            Bring a Cat Home
          </button>
        </li>
      </ul>
      {/* Button to the About us Section  */}
      <button id="AboutUs" onClick={scrollToAboutUs}>
        About Us
      </button>
    </div>
  );
}
