import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantsList}) {
  
  return (
    <ul className="cards">{/* render PlantCards components in here */}
      {plantsList.map(plant => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}

export default PlantList;
