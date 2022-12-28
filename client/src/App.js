import "./App.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import {
  ListPlants,
  ListSites,
  CreatePlant,
  CreateSite,
  SinglePlant,
  SingleSite
} from './components/index'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jesthine's Plant Inventory</h1>
      </header>

      <nav id="navbar" className="row">
        <Link to="/">All Plants</Link>
        <br></br>
        <br></br>
        <br></br>
        <Link to="/sites">Sites</Link>
        <br></br>
        <br></br>
        <br></br>
        <Link to="/wishlist">Wishlist</Link>
      </nav>
  
      <Routes>
        <Route path = '/' element = {<ListPlants/>}></Route>
        <Route path = '/' element = {<CreatePlant/>}></Route>
        <Route path = '/plants/:id' element = {<SinglePlant/>}></Route>

        <Route path = '/sites' element = {<ListSites/>}></Route>
        <Route path = '/sites' element = {<CreateSite/>}></Route>
        <Route path = '/sites/:id' element = {<SingleSite/>}></Route>
        {/* <Route path = '' element = {}></Route>
        <Route path = '' element = {}></Route>
        <Route path = '' element = {}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
