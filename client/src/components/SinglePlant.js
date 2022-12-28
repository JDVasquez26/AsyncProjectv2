import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSinglePlant, removePlantAsync, selectPlant } from "../features/PlantSlice";
// import { fetchPlantsAsync } from "../features/ListPlantsSlice";

function SinglePlant() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const singlePlant = useSelector(selectPlant);

  useEffect(() => {
    dispatch(fetchSinglePlant(id));
  }, [id, dispatch]);

const handleDelete =  (id) => {
  dispatch(removePlantAsync(id));
  navigate("/");
}


  return (
    <div id="plant-container">
     
        <div id="plant-title">
          <h2>{singlePlant.name}</h2>
          <button className="delt-plant-btn"
          onClick={() => handleDelete(id)}
          >Delete</button>
        </div>

        <div id="plant-details">
          <img
            src={singlePlant.imageUrl}
            alt="plant"
            height={350}
            width={380}
          />
        </div>

      

      <div id="form-container"></div>
    </div>
  );
}

export default SinglePlant;