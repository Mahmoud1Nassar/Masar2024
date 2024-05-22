// Home.js
import React from "react";
import AdoptionModal from "../AdoptionModal/AdoptionModal";
import "../Home/Home.css";

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

function Home(props) {
  return (
    <>
      <div className="home">
        <h1>Cats Story</h1>
        <div className="cat-container">
          {props.cats.map((cat, index) => (
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
        {/* Use props.handleShowModal and props.handleCloseModal */}
        <AdoptionModal
          show={props.showModal}
          handleClose={props.handleCloseModal}
          handleCatAdded={props.handleCatAdded} 
        />
      </div>
    </>
  );
}

export default Home;
