import React from "react";
import { Link } from "react-router-dom";
// import Button from '@mui/material/Button';

const PageNotFound = () => {
  return (
    <div style={{width: "100%", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "left", alignItems: "center"}}>
      <h1>SORRY PAGE NOT FOUND</h1>

      <button>
        <Link to="/"> HOME </Link>
      </button>
    </div>
  );
};

export default PageNotFound;