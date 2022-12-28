import React, { useEffect } from "react";
import { useParams, Link, useNavigate  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectSite, fetchSingleSite, removeSiteAsync } from "../features/SiteSlice";

function SingleSite() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const singleSite = useSelector(selectSite);
const singlePlant = singleSite.plants;

  useEffect(() => {
    dispatch(fetchSingleSite(id));
  }, [id, dispatch]);

  const handleDelete =  (id) => {
    dispatch(removeSiteAsync(id));
    navigate("/sites");
  }


  return (
    <div id="site-container">
      
      <div id="site-title">
        <h1>{singleSite.name} ({singleSite.lighting})</h1>
        <button className="delt-site-btn"
         onClick={() => handleDelete(id)}
        >Delete</button>
      </div>

      <div id="site-plants">
      <div>
            {singlePlant && singlePlant.length
            ? singlePlant.map((plant) =>(
              <div
              className='site-plant'
              key={`map of plants in site list${singleSite.id}`}
              >
              <h3>Plants</h3>
              <Link to ={`/plants/${plant.id}`}>
                {plant.name}
                </Link>
                </div>
            )):`No plants assigned to ${singleSite.name}` }
          </div>
      </div>

    </div>
  )
}

export default SingleSite