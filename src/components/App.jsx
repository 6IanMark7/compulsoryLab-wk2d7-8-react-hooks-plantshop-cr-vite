import {useState, useEffect } from "react";
import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { Outlet } from 'react-router-dom';

function App() {
  //INITIALIZE PLANTS DATA API URL
  const plantsApi = "http://localhost:4200/plants";
  //CREATING plants STATE
  const [plants, setPlants] = useState([])
  
  useEffect(() => {
    //FETCHING PLANTS API DATA
    async function fetchApiData() {
      const apiFetch = await fetch(plantsApi)
      const fetchedData = await apiFetch.json()
    
      setPlants(fetchedData)
    }
    fetchApiData()
  }, [])
  console.log("Plants Array", plants)
  
  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} />
      <Outlet context={plantsApi} />
    </div>
  );
}

export default App;
