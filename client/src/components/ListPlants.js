import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPlants,
  fetchPlantsAsync
} from '../features/ListPlantsSlice'
import CreatePlant from './CreatePlant'



function ListPlants() {
  const dispatch = useDispatch();

  const plants = useSelector(selectPlants);

  useEffect(() => {
    dispatch(fetchPlantsAsync());
  }, [dispatch]);

  return (
    <div className='plants-body'>
      <CreatePlant/>

      <div id='plants-list'>
      {plants && plants.length
        ? plants.map((plant) => (
          <div
          className='plant'
          key={`map of sites in sites list${plant.id}`}>
          {/* <Link to ={`/sites/${plant.id}`}> */}
            <h2>{plant.name}</h2>
          {/* </Link> */}

          </div>
        ))
      :null}
      </div>

    </div>
  )
}

export default ListPlants