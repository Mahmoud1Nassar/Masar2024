import Footer from "./components/Footer/Footer.js";
import NavBar from "./components/NavBar/NavBar.js";
import Home from "./components/Home/Home.js";
import AboutUs from "./components/AboutUs/AboutUs.js";
import './App.css'
import BGB from "../src/images/BGB1.jpg"

function App() {

  return (
    <>
      <NavBar />
      <div style={{backgroundImage:`url(${BGB})` }}>
      <Home />
      <AboutUs />
      <Footer />
      </div>
     
    </>
  );
}

export default App;
