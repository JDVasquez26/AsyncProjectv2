import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
selectSites,
fetchSitesAsync,
} from '../features/ListSitesSlice'
import CreateSite from './CreateSite'

function ListSites() {
  const dispatch = useDispatch();

  const sites = useSelector(selectSites);

  useEffect(() => {
    dispatch(fetchSitesAsync());
  }, [dispatch]);

  return (
    <div>
      <CreateSite/>
      <div id='sites-list'>
        {sites && sites.length
        ? sites.map((site) => (
          <div
          className='site'
          key={`map of sites in sites list${site.id}`}>
          {/* <Link to ={`/sites/${site.id}`}> */}
            <h2>{site.name}</h2>
          {/* </Link> */}
          </div>
        ))
      :null}
      </div>
    </div>
  )
}

export default ListSites