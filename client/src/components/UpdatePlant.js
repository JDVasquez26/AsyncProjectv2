import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateSinglePlantAsync, fetchSinglePlant } from "../features/PlantSlice";
import {
  selectSites, fetchSitesAsync
  } from '../features/ListSitesSlice'

function UpdatePlant() {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [amazonLink, setAmazonLink] = useState("");
  const [siteId, setSiteId] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {id} = useParams();

    const allSites = useSelector(selectSites);

    useEffect(() => { //grabbbing whatever the number is inside the useParam, remember this takes in an id param, from useParam
      dispatch(fetchSinglePlant(id)).then((res) =>{
        const {name, imageUrl, amazonLink, siteId,} = res.payload;
        setName(name); //<--this is how the inputs are already populated
        setImageUrl(imageUrl); ///<--this is how the inputs are already populated
        setAmazonLink(amazonLink);
        setSiteId(siteId)
      })
      }, [dispatch, id]);



    const handleSubmit = (evt) => {
      evt.preventDefault();
      const updatedSite = {id, name, imageUrl, amazonLink, siteId }
    dispatch(updateSinglePlantAsync(updatedSite))
    // .then(() => { 
    //   dispatch(fetchPlantsAsync());
    //   dispatch(fetchSitesAsync());
    // });
    }

  return (
    <div>
         <form id="plant-form" onSubmit={handleSubmit}>
        <h3>Edit Plant</h3>
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

        <label className="plantSites">Sites:</label>

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
  )
}

export default UpdatePlant