import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSite,
  fetchSingleSiteAsync,
  removeSiteAsync,
} from "../../features/siteFeatures/SiteSlice";
import UpdateSite from "./UpdateSite";
import { v4 as uuidv4 } from "uuid";

function SingleSite() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const singleSite = useSelector(selectSite);
  const singlePlant = singleSite.plants;

  useEffect(() => {
    dispatch(fetchSingleSiteAsync(id));
  }, [id, dispatch]);

  const handleDelete = (id) => {
    dispatch(removeSiteAsync(id));
    navigate("/sites");
  };

  return (
    <div id="site-container">
      <div id="site-title">
        <h1>
          {singleSite.name} ({singleSite.lighting})
        </h1>
        <button className="delt-site-btn" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>

      <div id="site-plants">
        <div>
          {singlePlant && singlePlant.length
            ? singlePlant.map((plant) => (
                <div
                  className="site-plant"
                  key={`map of plants in SingleSite${uuidv4()}`} //<--
                >
                  <Link to={`/plants/${plant.id}`}>{plant.name}</Link>
                  <div id="plant-details">
                    <img
                      src={plant.imageUrl}
                      alt="plant"
                      height={100}
                      width={100}
                    />
                  </div>
                </div>
              ))
            : `No plants assigned to ${singleSite.name}`}
        </div>

        <div>
          <UpdateSite />
        </div>
      </div>
    </div>
  );
}

export default SingleSite;
