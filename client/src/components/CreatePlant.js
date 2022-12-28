import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlantsAsync, addPlantAsync } from "../features/ListPlantsSlice";
import {
    selectSites, fetchSitesAsync
    } from '../features/ListSitesSlice'
function CreatePlant() {


  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [amazonLink, setAmazonLink] = useState("");
  const [siteId, setSiteId] = useState();
  // const [site, setSite] = useState()

  
  const allSites = useSelector(selectSites);
  console.log('sets from allSites:', allSites)
  const dispatch = useDispatch();

  
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addPlantAsync({name, imageUrl, amazonLink, siteId}))
    .then(() => { 
      dispatch(fetchPlantsAsync());
      dispatch(fetchSitesAsync());
    });
    setName("");
    setImageUrl('')
    setAmazonLink('')
    // setSiteId('');
    navigate("/");
  };
  

  return (
    <div className="createPlant">
      
      <form id="plant-form" onSubmit={handleSubmit}>
        <h3>Add a Plant</h3>
        <label className="plantName">Plant Name:</label>
        <input
          name="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="plantImage">Image:</label>
        <input
          name="imageUrl"
          placeholder="Optional"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <label className="plantLink">Link:</label>
        <input
          name="amazonLink"
          placeholder="Optional"
          value={amazonLink}
          onChange={(e) => setAmazonLink(e.target.value)}
        />

        <label className="plantSites">Possible Sites:</label>

        <select name="siteId"
        value = {siteId}
         onChange={(e) => setSiteId(e.target.value)}
        >
          <option>-</option>
          {allSites && allSites.length 
          ? allSites.map((site) => (
            <option 
            key={`map of sites in sites list${site.id}`}
            value = {site.id}
            // onChange={(e) => setSiteId(e.target.value)}
            >
               {site.name}
            </option>
          ))
          :null}
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreatePlant;
