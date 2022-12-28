import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSiteAsync } from "../features/ListSitesSlice";

function CreateSite() {
  const [name, setName] = useState("");
  const [lighting, setLighting] = useState("");

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addSiteAsync({ name, lighting }));
    setName("");
    setLighting("");
  };

  return (
    <div>
      <form id="site-form" onSubmit={handleSubmit}>
        <h3>Add a New Site</h3>
        <label className="siteName">Name Site Location:</label>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="siteName">Type of Lighting:</label>
        <input
          name="lighting"
          value={lighting}
          onChange={(e) => setLighting(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateSite;
