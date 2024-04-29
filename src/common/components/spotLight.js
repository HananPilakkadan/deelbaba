import React from "react";
import { spotLightImage } from "../images/images";
import SearchBar from "../components/searchBar"

const spotLight = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <SearchBar />
      <img style={{ display: "block", width: "100%" }} src={spotLightImage} alt=""/>

      <section className="employer">
      </section>
    </div>
  );
};

export default spotLight;
