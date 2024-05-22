import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Home/Home.css";
// Define the Cat component outside of the Home component
const CatCard = ({
  name,
  origin,
  temperament,
  color,
  image,
  age,
  gender,
  phone,
}) => {
  return (
    
    <div className={`cat-card ${gender.toLowerCase()}`} >
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

function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    axios
      .get("https://serverpro-qni2.onrender.com/")
      .then((response) => {
        setCats(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="home">
      <h1>Cats Story</h1>
      <div className="cat-container">
        {cats.map((cat) => (
          <CatCard
            key={cat.id}
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
    </div>
  );
}

export default Home;