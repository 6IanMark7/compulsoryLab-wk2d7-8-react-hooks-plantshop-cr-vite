import React, { useState, useEffect } from "react";
import { useOutletContext } from 'react-router-dom';

function NewPlantForm() {
  // //CREATE STATES FOR INPUTS
  // const [name, setNames] = useState()
  // const [imageUrl, setImageUrl] = useState()
  // const [price, setPrice] = useState()
  
  const [userInput, setUserInput]=useState({name:"",imageUrl:"",price:""})

  function handleSubmit(e) {
    e.preventDefault()
    //'POST' METHOD
  useEffect(() => {
    async function postUserInput(userInputData) {
      const plantsApi = useOutletContext()
      await fetch((plantsApi), {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body:JSON.stringify(userInput)
      })
    }
    postUserInput() 
    setUserInput({name:"",imageUrl:"",price:""})
  },[])
    
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
            setUserInput(e.target.value)
          }}
        
        required
        />
        <input
          type="text"
          name="image"
          value={userInput.imageUrl}
          placeholder="Image URL"

          onChange={(e) => {
            setUserInput(e.target.value)
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
            setUserInput(e.target.value)
          }}

          required
        />

        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
