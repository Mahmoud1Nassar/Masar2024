import React, { useState, useEffect } from "react";
import AdoptionModal from "../src/components/AdoptionModal/AdoptionModal.js";
import Footer from "./components/Footer/Footer.js";
import Home from "../src/components/Home/Home.js"
import AboutUs from "./components/AboutUs/AboutUs.js";
import './App.css'
import BGB from "../src/images/BGB1.jpg"
import SuccessfulStories from "../src/components/SuccessfulStories/SuccessfulStories.js";
import { Route, Routes } from 'react-router-dom';
import NavBar from "../src/components/NavBar/NavBar.js"
import axios from "axios";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCatAdded = (newCatData) => {
    setCats([...cats, newCatData]);
  };

  const fetchData = () => {
    axios
      .get("https://serverpro-qni2.onrender.com/")
      .then((response) => {
        setCats(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  };

  return (
    <>
      <div style={{ backgroundImage: `url(${BGB})` ,width:'1300px'}}>
        <NavBar onClick={handleShowModal} />
        <AdoptionModal
          show={showModal}
          handleClose={handleCloseModal}
          handleCatAdded={handleCatAdded}
        />
        <Routes>
          <Route path='/SuccessfulStories' element={<SuccessfulStories />} />
          <Route path='/' element={<Home showModal={showModal} handleCloseModal={handleCloseModal} handleCatAdded={handleCatAdded} cats={cats} />} />
        </Routes>
        <AboutUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
