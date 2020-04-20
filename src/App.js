import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Componenets/Header/Header';
import Home from './Componenets/Home/Home';
import Shipment from './Componenets/Shipment/Shipment';

function App() {

  const [num , setNum] = useState(1); //higher order state
  const [homeCount ,setHomeCount] = useState(0);
  const [shipmentCount , setShipmentCount] = useState(0);


  return (
    <div className="App">

      <Header num={num} setNum ={setNum} homeCount={homeCount} shipmentCount={shipmentCount}></Header>
      <Home num ={num} homeCount={homeCount} setHomeCount={setHomeCount} shipmentCount={shipmentCount}></Home>
      <Shipment num ={num} homeCount={homeCount} shipmentCount={shipmentCount} setShipmentCount={setShipmentCount}></Shipment>

    </div>
  );
}

export default App;
