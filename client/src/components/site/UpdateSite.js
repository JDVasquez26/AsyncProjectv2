import React, { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import { useParams} from "react-router-dom";
import { updateSiteAsync, fetchSingleSiteAsync} from "../../features/siteFeatures/SiteSlice";

function UpdateSite() {

const [name, setName] = useState('');
const [lighting, setLighting] = useState('');

const dispatch = useDispatch();

const {id} = useParams();

//loading to do from database; dispatch is how we triggered the fetchSingleSite
  //we pass in what we pass in the Slice
  useEffect(() => { //grabbbing whatever the number is inside the useParam, remember this takes in an id param, from useParam
    dispatch(fetchSingleSiteAsync(id)).then((res) =>{
      const {name, lighting} = res.payload;
      setName(name); //<--this is how the inputs are already populated
      setLighting(lighting) ///<--this is how the inputs are already populated
    })
    }, [dispatch, id]);


const handleSubmit = (evt) => {
    evt.preventDefault();
const updatedSite = {id, name, lighting}
    dispatch(updateSiteAsync(updatedSite));
}

  return (
    <div>
        <form id="site-form" onSubmit={handleSubmit}>
        <h3>Edit Site</h3>
        <label className="siteName">Edit Site Name:</label>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="siteName">Edit Lighting:</label>
        <input
          name="lighting"
          value={lighting}
          onChange={(e) => setLighting(e.target.value)}
        />
        <button type="submit">Edit</button>
      </form>

    </div>
  )
}

export default UpdateSite