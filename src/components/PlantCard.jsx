import React, { useState } from "react";

console.log("line 9 PlantCard" )

function PlantCard({plant}) {
  

  return (
    <li className="card" data-testid={"plant-item"} >

      {plant.image ? <img src={plant.image} alt={"plant name"} /> : <img src={"https://via.placeholder.com/400"} alt={"plant name"} />}

      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
