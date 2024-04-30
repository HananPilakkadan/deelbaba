import React from "react";
import { landingPageSpotlightImage, spotLightImage } from "../../images/images";
import "./spotlight.scss";
import SearchBar from "../searchBar";
import Button from "../button";

const spotLight = () => {
  return (
    <div
      className="spotlight"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SearchBar />
      <div className="shade"></div>
      <img
        style={{ display: "block", width: "100%" }}
        src={landingPageSpotlightImage}
        alt=""
      />

      <div className="textArea">
        <h3>Opertunities Waiting For You</h3>
        <h2>
          One Solution For <br /> All Your Needs
        </h2>
        <p>you can get services products and everything from single window</p>
        <Button buttonText={"Explore"} className={"spotlightButton"} />
      </div>
    </div>
  );
};

export default spotLight;
