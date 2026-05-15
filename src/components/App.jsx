import {useState, useEffect } from "react";
import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { Outlet } from 'react-router-dom';
import NewPlantForm from "./NewPlantForm";

function App() {
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
