import React from "react";
import Navbar from "../../common/components/navBar";
import SearchBar from "../../common/components/searchBar";
import {
  bike,
  carWash,
  discount,
  engine,
  sedan,
  spareBanner,
  steering,
  discount_two,
} from "../../common/images/images";
import "./AutoMobile.scss";
import { features } from "../../common/constants/constants";
import FeatureCard from "../../common/components/featureCard";
import { Link } from "react-router-dom";
import MayInterest from "../../common/components/MayInterest";

const AutoMobile = () => {
  return (
    <div>
      <div className="spare-banner">
        <SearchBar />
        <img src={spareBanner} alt="Banner" />
      </div>
      <div className="rounded_list">
        <div className="round_item">
          <div className="img-box">
            <img src={sedan} alt="Car" />
          </div>
          <span>
            Car <br />
            Spare Parts
          </span>
        </div>
        <div className="round_item">
          <div className="img-box">
            <img src={bike} alt="Bike" />
          </div>
          <span>
            Bike <br />
            Spare Parts
          </span>
        </div>
        <div className="round_item">
          <div className="img-box">
            <img src={steering} alt="Steering" />
          </div>
          <span>Accessories</span>
        </div>
        <div className="round_item">
          <div className="img-box">
            <img src={engine} alt="Oil" />
          </div>
          <span>Lubrications</span>
        </div>
        <div className="round_item">
          <div className="img-box">
            <img src={carWash} alt="Wash" />
          </div>
          <span>
            Vehicle <br />
            Wash
          </span>
        </div>
      </div>
      <div className="product-wrapper">
        <div className="product-items">
          {features.map((items, index) => (
            <FeatureCard items={items} margin={true} />
          ))}
        </div>
      </div>
      <MayInterest />
      <div className="product-wrapper">
        <div className="product-items">
          {features.map((items, index) => (
            <FeatureCard items={items} margin={true} />
          ))}
        </div>
      </div>
      <img src={spareBanner} alt="Banner" />
    </div>
  );
};

export default AutoMobile;
