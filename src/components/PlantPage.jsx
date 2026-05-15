import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const plantsApi = "http://localhost:4200/plants";

  //CREATE PLANTS STATE
  const [plants, setPlants] = useState([])
  //CREATE FILTERED PLANTS STATE
  const [searchTerm, setSearchTerm] = useState("")
  
  //FETCH DATA FROM SERVER - GET
  async function getPlantsData() {
    try {
      const fetchUrl = await fetch(plantsApi)
      const fetchedData = await fetchUrl.json()
    
      setPlants(fetchedData);
    }
    catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    getPlantsData() 
  }, [])
  
  //FILTER THE PLANTS WHEN USER SEARCHES AND SEND STATES TO Search COMPONENT
  const visiblePlants = plants.filter((plant) =>
      plant.name.toLowerCase().includes(searchTerm.toLowerCase())
      
    )
  
  console.log("Line 32", plants)
  return (
    <main>
      <NewPlantForm plantsApi={plantsApi} />
      <Search searchTerm={searchTerm } setSearchTerm={setSearchTerm} />
      <PlantList plants={visiblePlants} />
    </main>
  );
}

export default PlantPage;
