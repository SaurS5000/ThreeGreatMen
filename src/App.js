import "./App.css";
import React, { useState } from "react";
import MapContainer from "./MapContainer";

function App() {
  const [place, setPlace] = useState("");
  const [wasteFood, setWasteFood] = useState("");
  const [amount, setAmount] = useState("");
  const [contact, setContact] = useState("");
  const [currentLocation, setCurrentLocation] = useState(null);

  // Function to get the current location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
      }, (error) => {
        console.error(error);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      place,
      wasteFood,
      amount,
      contact
    );
    
    const formData = {
      place,
      wasteFood,
      amount,
      contact
    };
    return formData;

    // Add your form submission logic here
  };

  const handleReset = () => {
    // Reset all state variables here
    setPlace("");
    setWasteFood("");
    setAmount("");
    setContact("");
  };

  return (
    <div className="App">
      <h1>Form in React</h1>
      {currentLocation && <MapContainer currentLocation={currentLocation} />}
      <button onClick={getCurrentLocation}>Get Current Location</button>
      <a href={`https://www.google.com/maps/search/?api=1&query=${place}`} target="_blank" rel="noopener noreferrer">View Map</a>
      <fieldset>
        <form action="#" method="get">
          <label htmlFor="place">Place*</label>
          <input
            type="text"
            name="place"
            id="place"
            value={place}
            onChange={(e) =>
              setPlace(e.target.value)
            }
            placeholder="Enter Place"
            required
          />
          <label htmlFor="wasteFood">Waste Food Name*</label>
          <input
            type="text"
            name="wasteFood"
            id="wasteFood"
            value={wasteFood}
            onChange={(e) =>
              setWasteFood(e.target.value)
            }
            placeholder="Enter Waste Food"
            required
          />
          <label htmlFor="amount">Amount*</label>
          <input
            type="text"
            name="amount"
            id="amount"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value)
            }
            placeholder="Enter Amount"
            required
          />
          <label htmlFor="contact">Contact*</label>
          <input
            type="text"
            name="contact"
            id="contact"
            value={contact}
            onChange={(e) =>
              setContact(e.target.value)
            }
            placeholder="Enter Contact"
            required
          />
          <button
            type="reset"
            value="reset"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            type="submit"
            value="Submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default App;
