// import "./App.css";

import React from "react";
import Navbar from "../components/navbar/Navbar";
import AppRoutes from "./AppRoutes";
import Footer from "../components/footer/Footer";


function App() {
  return (
    <div id ="body">
    <div id ="header">
    <Navbar />
    </div>
    <div id="main">
    <AppRoutes />
    </div>
    <div id ="footer">
    <Footer/>
    </div>
  </div>






    // <div className="App">
    //   <header className="App-header">
    //     <h1>Jesthine's Plant Inventory</h1>
    //   </header>

    //   <nav id="navbar" className="row">
    //     <Link to="/">All Plants</Link>
    //     <br></br>
    //     <br></br>
    //     <br></br>
    //     <Link to="/sites">Sites</Link>
    //     <br></br>
    //     <br></br>
    //     <br></br>
    //     {/* <Link to="/wishlist">Wishlist</Link> */}
    //   </nav>
  
    //   <Routes>
    //     <Route path = '/' element = {<ListPlants/>}></Route>
    //     <Route path = '/' element = {<CreatePlant/>}></Route>
    //     <Route path = '/plants/:id' element = {<SinglePlant/>}></Route>

    //     <Route path = '/sites' element = {<ListSites/>}></Route>
    //     <Route path = '/sites' element = {<CreateSite/>}></Route>
    //     <Route path = '/sites/:id' element = {<SingleSite/>}></Route>
    //     {/* <Route path = '' element = {}></Route>
    //     <Route path = '' element = {}></Route>
    //     <Route path = '' element = {}></Route> */}
    //   </Routes>
    // </div>
  );
}

export default App;
