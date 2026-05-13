import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants}) {
  console.log("line 7", plants)
  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plantsList={plants} />
    </main>
  );
}

export default PlantPage;
