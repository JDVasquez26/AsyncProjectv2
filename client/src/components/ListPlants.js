import "../App.css";
import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectPlants, fetchPlantsAsync } from "../features/ListPlantsSlice";
import CreatePlant from "./CreatePlant";

function ListPlants() {
  const dispatch = useDispatch();

  const plants = useSelector(selectPlants);

  useEffect(() => {
    dispatch(fetchPlantsAsync());
  }, [dispatch]);

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
