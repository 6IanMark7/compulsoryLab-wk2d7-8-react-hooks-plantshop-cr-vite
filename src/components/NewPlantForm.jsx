import React, { useState, useEffect } from "react";
import { useOutletContext } from 'react-router-dom';

function NewPlantForm({plantsApi}) {
  //CREATE USER INPUT STATE AND INITIALIZE TO AN OBJECT
  const [userInput, setUserInput] = useState({ name: "", image: "", price: 0 })
  
  //POST USER INPUT DATA 
  async function postUserInput() {
    try {
      await fetch(plantsApi, ({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInput)
      }))
        .then(res => res.json)
      .then(data=>setUserInput(data))
    }
    catch (err) {
      console.error(err)
    }
    //NULL THE INPUT FIELD
    setUserInput({ name: "", image: "", price: 0 })
  }
  function handleSubmit(e) {
    e.preventDefault()

    postUserInput()
  }
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={userInput.name}
          placeholder="Plant name"
        
          onChange={(e) => {
            setUserInput(prevInput => ({
              ...prevInput,[e.target.name]:e.target.value
            }))
          }}
          
        required
        />
        <input
          type="text"
          name="image"
          value={userInput.image}
          placeholder="Image URL"

          onChange={(e) => {
            setUserInput(prevInput => ({
              ...prevInput,[e.target.name]:e.target.value
            }))
          }}
          required
        />

        <input
          type="number"
          name="price"
          step="0.01"
          value={userInput.price}
          placeholder="Price"
        
          onChange={(e) => {
            setUserInput(prevInput => ({
              ...prevInput,[e.target.name]:parseFloat(e.target.value)
            }))
          }}
          
          required
        />

        <button type="submit" >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
