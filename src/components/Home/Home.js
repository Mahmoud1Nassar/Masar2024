// Home.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import AdoptionModal from "../AdoptionModal/AdoptionModal";
import "../Home/Home.css";
import NavBar from "../NavBar/NavBar";

// cards for Showing the info. about Adoption cats
const CatCard = ({ name, origin, temperament, color, image, age, gender, phone }) => {
  return (
    <div className={`cat-card ${gender.toLowerCase()}`}>
      <img src={image} alt={`${name}`} className="cat-image" />
      <div className="cat-details">
        <h2>{name}</h2>
        <strong> {origin}</strong>
        <strong> {color}</strong>
        <strong> {age} </strong>
        <strong> {gender}</strong>
        <strong>{temperament}</strong>
        <strong> {phone}</strong>
      </div>
    </div>
  );
};
///////////////////////////////////////////////////////////////////////////////

function Home() {
  // render data + updated data
  const [cats, setCats] = useState([]);

  //showing the modal 
  const [showModal, setShowModal] = useState(false);

///////////////////////////////////////////////////////////////////////////////////

/// data 
  useEffect(() => {
    fetchData();
  }, []);

// show updated data + data
  const fetchData = () => {
    axios
      .get("https://serverpro-qni2.onrender.com/")
      .then((response) => {
        // set the data inside cats array
        setCats(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  };

  /// updated data function 
  const handleCatAdded = (newCatData) => {
    //add new cat to the cats array
    setCats([...cats, newCatData]);
  };
///////////////////////////////////////////////

/// close and open modal//////////////////////////////
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };
//////////////////////////////////////////////
  return (
    <>
    {/* send the handel show to the navbar */}
    <NavBar onClick={handleShowModal}/>
    <div className="home">
      <h1>Cats Story</h1>
      <div className="cat-container">
        {/* get all the cats as a cards from the cats array */}
        {cats.map((cat, index) => (
          <CatCard
            key={index}
            name={cat.name}
            origin={cat.origin}
            temperament={cat.temperament}
            color={cat.color}
            image={cat.image}
            age={cat.age}
            gender={cat.gender}
            phone={cat.phone}
          />
        ))}
      </div>
      
      <AdoptionModal
        show={showModal}
        handleClose={handleCloseModal}
        handleCatAdded={handleCatAdded} 
      />
    </div>
    </>
  );
}

export default Home;
