import Footer from "./components/Footer/Footer.js";
import Home from "./components/Home/Home.js";
import AboutUs from "./components/AboutUs/AboutUs.js";
import './App.css'
import BGB from "../src/images/BGB1.jpg"

function App() {

  return (
    <>
      <div style={{backgroundImage:`url(${BGB})` }}>
      <Home />
      <AboutUs />
      <Footer />
      </div>
     
    </>
  );
}

export default App;
