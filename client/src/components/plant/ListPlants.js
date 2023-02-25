
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPlants,
  fetchPlantsAsync,
  purchasePlantAsync,
} from "../../features/plantFeatures/ListPlantsSlice";
import CreatePlant from "./CreatePlant";

function ListPlants() {
  const [purchased, setPurchased] = useState(false);
  // const [status, setStatus] = useState(false); 
  
  const dispatch = useDispatch();

  const plants = useSelector(selectPlants);

  useEffect(() => {
    dispatch(fetchPlantsAsync());
  }, [dispatch]);


  const handleBtn = (id) => {
    console.log("clicked");
    console.log('plantid from btn', id)
    setPurchased(!purchased)
    const updatedPurchase = {id, purchased};
    dispatch(purchasePlantAsync(updatedPurchase)).then(() => {
      dispatch(fetchPlantsAsync());
    });
    
  };

  return (
    <div className="plants-body">
      <div id="plants-list">
        {plants && plants.length
          ? plants.map((plant) => (
              <div
                className="plant"
                key={`map of plants in plants list${plant.id}`}
              >
                <Link to={`/plants/${plant.id}`}>
                  <h5>{plant.name}</h5>
                  <img
                    src={plant.imageUrl}
                    alt="plant"
                    height={100}
                    width={100}
                  />
                </Link>
                <button
                  className="purchased-btn"
                  onClick={() => handleBtn(plant.id)}
                >
                  {plant.purchased === false ? "Must purchased!" : "Got it!"}
                </button>
              </div>
            ))
          : null}
      </div>

      <div id="form-container">
        <CreatePlant />
      </div>
    </div>
  );
}

export default ListPlants;
