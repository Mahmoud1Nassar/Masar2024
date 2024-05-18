import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Dropdown } from "react-bootstrap";
import Select from 'react-select';
import './AdoptionModal.css'

function AdoptionModal(props) {
  //age//////////////////////////////////////////
  const [year, setYear] = useState(1);
  const [month, setMonth] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([]);
  const handleDisplay = () => {
    const label = `${year} Years and ${month} Months`;
    return <span style={{ fontSize: '20px', fontFamily: 'Monospace' }}>{label}</span>;
  };
  // contries ///////////////////////////////////////
  useEffect(() => {   
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch('https://freetestapi.com/api/v1/countries');
      const data = await response.json();
      const countriesOptions = data.map(country => ({
        value: country.name,
        label: country.name
      }));
      setOptions(countriesOptions);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };
  /////////////////////////////////////////////////////////////////////////////

  const handleSaveChanges = () => {
    // Handle saving form data
    props.handleClose(); // Close the modal after saving
  };
  // colors ////////////////////////////////////////////////////////////////////////////////

  const customStyles = {
    // Define your custom styles for the modal if needed
  };


  const [selectedColor, setSelectedColor] = useState(null);
  const [colors] = useState([
    { value: 'black', label: 'Black' },
    { value: 'white', label: 'White' },
    { value: 'gray', label: 'Gray' },
    { value: 'brown', label: 'Brown' },
    { value: 'ginger', label: 'Ginger (Orange)' },
    { value: 'tabby', label: 'Tabby (Striped)' },
    { value: 'calico', label: 'Calico (Multi-colored)' },
    { value: 'tortoiseshell', label: 'Tortoiseshell' },
    { value: 'siamese', label: 'Siamese' },
    { value: 'tuxedo', label: 'Tuxedo' }
    // Add more colors as needed
  ])

  const handleChange = (selectedColor) => {
    setSelectedColor(selectedColor);
  };


  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton style={{backgroundColor:'#f8588d'}}>
          <Modal.Title style={{ fontSize: '30px', fontFamily: 'Monospace' }}>Adoption Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:'#fa91b4'}}>
          <Form>
            <Form.Group className="mb-3" controlId="formCatName">
              <Form.Label style={{ fontSize: '20px', fontFamily: 'Monospace' }}>Cat Name</Form.Label>
              <Form.Control type="text" style={{ fontFamily: 'Monospace' }} placeholder="Enter cat name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formOrigin">
              <Form.Label style={{ fontSize: '20px', fontFamily: 'Monospace' }}>Origin</Form.Label>
              <Select style={{ fontFamily: 'Monospace' }}
                options={options}
                value={selectedOption}
                onChange={setSelectedOption}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAge">
              <Form.Label style={{ fontSize: '20px', fontFamily: 'Monospace' }}>Color</Form.Label>
              <Select style={{ fontFamily: 'Monospace' }}
                options={colors}
                value={selectedColor}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontSize: '20px', fontFamily: 'Monospace' }}>Age</Form.Label>
              <div>
                <input style={{ width: '45px', height: '25px', fontFamily: 'Monospace' }} type="number" value={year} onChange={(e) => setYear(parseInt(e.target.value))} />
                <span style={{ fontFamily: 'Monospace' }}> Years </span>
                <input style={{ width: '45px', height: '25px', fontFamily: 'Monospace' }} type="number" value={month} onChange={(e) => setMonth(parseInt(e.target.value))} />
                <span style={{ fontFamily: 'Monospace' }}> Months</span>
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontSize: '20px', fontFamily: 'Monospace' }}>Select the gender:</Form.Label>
              <br />
              <Form.Check
                type="radio"
                label="Male"
                name="gender"
                id="male"
                value="male"
                style={{ fontFamily: 'Monospace' }}
              />
              <Form.Check
                type="radio"
                label="Female"
                name="gender"
                id="female"
                value="female"
                style={{ fontFamily: 'Monospace' }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formImageUrl">
              <Form.Label style={{ fontSize: '20px', fontFamily: 'Monospace' }}>Image URL</Form.Label>
              <Form.Control type="text" style={{ fontFamily: 'Monospace' }} placeholder="Enter image URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTemperament">
              <Form.Label style={{ fontSize: '20px', fontFamily: 'Monospace' }}>Temperament</Form.Label>
              <Form.Control as="textarea" style={{ fontFamily: 'Monospace' }} rows={3} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontSize: '20px', fontFamily: 'Monospace' }}>Age Label:</Form.Label>
              <div>{handleDisplay()}</div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCatName">
              <Form.Label style={{ fontSize: '20px', fontFamily: 'Monospace' }}>Contact Number</Form.Label>
              <Form.Control type="text" style={{ fontFamily: 'Monospace' }} placeholder="Enter Phone Number" />
            </Form.Group>
          </Form>
        </Modal.Body>
      

        <Modal.Footer style={{backgroundColor:'#f8588d'}}>


          <button className="add-kitten-button" onClick={handleSaveChanges}>
            Save Changes
          </button>
          <Button variant="secondary" className="add-kitten-button" style={{ fontFamily: 'Monospace' ,marginLeft:'12px',marginRight:'140px',backgroundColor:'gray'}} onClick={props.handleClose}>
            Close
          </Button>

        </Modal.Footer>

      </Modal>
    </>
  );
}


export default AdoptionModal;
