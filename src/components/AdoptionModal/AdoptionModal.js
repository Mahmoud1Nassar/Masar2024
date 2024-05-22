import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Select from "react-select";
import axios from "axios";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import BGM from "../../images/BGM.jpg";
import '../AdoptionModal/AdoptionModal.css'
function AdoptionModal(props) {
  // use state for all elements and errors
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([]);
  const [name, setName] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [gender, setGender] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [temperament, setTemperament] = useState("");
  const [errors, setErrors] = useState({});
  const [phone, setPhone] = useState('');

  ////////////////////////////////////////////////////////////////////////////////////////

  //Fetch countries data that came from the api 
  useEffect(() => {
    fetchCountries();
  }, []);
  //Get the countries from the api 
  const fetchCountries = async () => {
    try {
      const response = await fetch("https://freetestapi.com/api/v1/countries");
      const data = await response.json();
      const countriesOptions = data.map((country) => ({
        value: country.name,
        label: country.name,
      }));
      setOptions(countriesOptions);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  // save change function for the modal 
  const handleSaveChanges = async () => {
    // Validate form inputs
    const validationErrors = {};
    if (!name.trim()) {
      validationErrors.name = "Required";
    }
    if (!selectedOption) {
      validationErrors.origin = "Required";
    }
    if (!selectedColor) {
      validationErrors.color = "Required";
    }
    if (!year && !month) {
      validationErrors.age = "Required";
    }
    if (!gender) {
      validationErrors.gender = "Required";
    }
    if (!imageUrl.trim()) {
      validationErrors.imageUrl = "Required";
    }
    if (!phone.trim()) {
      validationErrors.phone = "Required";
    }
    if (!temperament.trim()) {
      validationErrors.temperament = "Required";
    }

    // Check if there are any validation errors
    if (Object.keys(validationErrors).length === 0) {
      let ageValue = "";
      if (year === 0) {
        ageValue = `${month} Months`;
      } else if (month === 0) {
        ageValue = `${year} Years`;
      } else {
        ageValue = `${year} Years and ${month} Months`;
      }
      const catData = {
        name,
        origin: selectedOption?.value,
        color: selectedColor?.value,
        age: ageValue,
        gender,
        image: imageUrl,
        temperament,
        phone,
      };

      try {
        // Post data to add cat to the database
       await axios.post("https://serverpro-qni2.onrender.com/addCat", catData);
        // send the data that came from the modal after clicking
        // it to the handle cat add funcyion in the home component
        props.handleCatAdded(catData);
        // Close the modal
        props.handleClose();
      } catch (error) {
        console.error("Error saving cat data:", error);
      }
    } else {
      // Set validation errors
      setErrors(validationErrors);
    }
  };

  // generate some colors for choose the cats color
  const colors = [
    { value: "black", label: "Black" },
    { value: "white", label: "White" },
    { value: "gray", label: "Gray" },
    { value: "brown", label: "Brown" },
    { value: "ginger", label: "Ginger (Orange)" },
    { value: "tabby", label: "Tabby (Striped)" },
    { value: "calico", label: "Calico (Multi-colored)" },
    { value: "tortoiseshell", label: "Tortoiseshell" },
    { value: "siamese", label: "Siamese" },
    { value: "tuxedo", label: "Tuxedo" },
  ];


  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} >
        <Modal.Header closeButton style={{ backgroundColor: "#ffe6e6", height: '55px' }}>
          <center>
            <span style={{ fontSize: "30px", fontFamily: "Monospace", marginLeft: '90px' }}>
              Bring a Cat Home
            </span>
          </center>
        </Modal.Header>
        {/* the name Section  */}
        <Modal.Body style={{ backgroundImage: `url(${BGM})`, height: '550px' }}>
          <Form>
            <div style={{ marginLeft: '80px' }}>
              <Form.Group className="mb-3" controlId="formCatName">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span className="required"style={{ fontSize: "20px", fontFamily: "Monospace", marginRight: "34px", marginLeft: '7px' }}>Name</span>
                  <Form.Control
                 
                    type="text"
                    style={{ fontFamily: "Monospace", width: '260px' }}
                    placeholder="Enter cat name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    isInvalid={!!errors.name}
                    className="required:after"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
              {/* the Origin Section  */}

              <Form.Group className="mb-3" controlId="formOrigin">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span className="required" style={{ fontSize: "20px", fontFamily: "Monospace", marginRight: "18px" }}>
                    Origin
                  </span>
                  <Select
                  className="required:after"
                    style={{ fontFamily: "Monospace", width: '260px' }}
                    options={options}
                    value={selectedOption}
                    onChange={setSelectedOption}
                    isInvalid={!!errors.origin}
                  />
                </div>
                {errors.origin && <div className="invalid-feedback">{errors.origin}</div>}
              </Form.Group>
              {/* the color Section  */}

              <Form.Group className="mb-3" controlId="formColor">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span className="required" style={{ fontSize: "20px", fontFamily: "Monospace", marginRight: '30px' }}>
                    Color </span>
                  <Select
                  className="required:after"
                    style={{ fontFamily: "Monospace", width: '260px' }}
                    options={colors}
                    value={selectedColor}
                    onChange={setSelectedColor}
                    isInvalid={!!errors.color}
                  />
                </div>
                {errors.color && <div className="invalid-feedback">{errors.color}</div>}
              </Form.Group>
              {/* the Age Section  */}
              <Form.Group className="mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Form.Label className="required" style={{ fontSize: "20px", fontFamily: "Monospace", marginRight: '38px', marginLeft: '10px' }}>
                    Age
                  </Form.Label>
                  <input
                  className="required:after"
                    style={{
                      width: "45px",
                      height: "25px",
                      fontFamily: "Monospace", marginRight: '5px'
                    }}
                    type="number"
                    value={year}
                    onChange={(e) => setYear(parseInt(e.target.value))}
                    isInvalid={!!errors.year}
                  />
                  <span style={{ fontFamily: "Monospace", marginRight: '5px' }}> Years </span>
                  <input
                    style={{
                      width: "45px",
                      height: "25px",
                      fontFamily: "Monospace", marginRight: '8px'
                    }}
                    type="number"
                    value={month}
                    onChange={(e) => setMonth(parseInt(e.target.value))}
                    isInvalid={!!errors.month}
                  />
                  <span style={{ fontFamily: "Monospace" }}> Months</span>
                </div>
                {errors.year && <div className="invalid-feedback">{errors.year}</div>}
                {errors.month && <div className="invalid-feedback">{errors.month}</div>}
              </Form.Group>
              {/* the Gender Section  */}
              <Form.Group className="mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Form.Label className="required" style={{ fontSize: "20px", fontFamily: "Monospace", marginRight: '15px' }}>
                    Gender
                  </Form.Label>
                  <br />
                  <Form.Check
                  className="required:after"
                    type="radio"
                    label="Male"
                    name="gender"
                    id="male"
                    value="male"
                    style={{ fontFamily: "Monospace", marginRight: '15px', fontSize: "20px" }}
                    onChange={(e) => setGender(e.target.value)}
                    isInvalid={!!errors.gender}
                  />
                  <Form.Check
                    type="radio"
                    label="Female"
                    name="gender"
                    id="female"
                    value="female"
                    style={{ fontFamily: "Monospace", fontSize: "20px", marginRight: '15px' }}
                    onChange={(e) => setGender(e.target.value)}
                    isInvalid={!!errors.gender}
                  />
                </div>
                {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
              </Form.Group>
            </div>
            {/* the Image Section  */}
            <Form.Group className="mb-3" controlId="formImageUrl">
              <div style={{ display: "flex", alignItems: "center" }}>
                <Form.Label className="required" style={{ fontSize: "20px", fontFamily: "Monospace", marginRight: "15px", marginLeft: '80px' }}>
                  Image URL
                </Form.Label>
                <Form.Control
                className="required:after"
                  type="text"
                  style={{ fontFamily: "Monospace", width: '250px' }}
                  placeholder="Enter image URL"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  isInvalid={!!errors.imageUrl}
                />
              </div>
              <Form.Control.Feedback type="invalid">
                {errors.imageUrl}
              </Form.Control.Feedback>
            </Form.Group>
            {/* the Phone Section  */}
            <Form.Group className="mb-3" controlId="formContactNumber">
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className="required" style={{ fontSize: "20px", fontFamily: "Monospace", marginLeft: "90px" }}>
                  Phone
                </span>
                <PhoneInput
                className="required:after"
                  style={{ fontSize: "20px", fontFamily: "Monospace", marginLeft: "50px" }}
                  defaultCountry="jo"
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
              </div>
            </Form.Group>
            {/* the Temperament Section  */}
            <Form.Group className="mb-3" controlId="formTemperament">
              <span className="required" style={{ fontSize: "20px", fontFamily: "Monospace", marginLeft: "77px" }}>
                Temperament
              </span>
              <Form.Control
              className="required:after"
                as="textarea"
                style={{ fontFamily: "Monospace", width: '300px', marginLeft: "77px" }}
                rows={2}
                value={temperament}
                onChange={(e) => setTemperament(e.target.value)}
                isInvalid={!!errors.temperament}
              />
              <Form.Control.Feedback type="invalid">
                {errors.temperament}
              </Form.Control.Feedback>
            </Form.Group>
            {/* the Buttons Section  */}
            <Form.Group className="mb-3" controlId="formTemperament">
              <Button
                style={{ marginLeft: '125px', marginTop: '0px', backgroundColor: "#99ddff", borderRadius: '25px', color: 'black' }}
                className="add-kitten-button"
                onClick={handleSaveChanges}
              >
                Save Changes
              </Button>
              <Button
                variant="secondary"
                className="add-kitten-button"
                style={{
                  fontFamily: "Monospace",
                  marginRight: "auto",
                  backgroundColor: "#99ddff",
                  marginTop: '0px', borderRadius: '25px', color: 'black', marginLeft: '10px'
                }}
                onClick={props.handleClose}
              >
                Close
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AdoptionModal;
