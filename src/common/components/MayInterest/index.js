import React from "react";
import { Link } from "react-router-dom";
import { discount, discount_two } from "../../images/images";
import "../../../assets/css/index.scss";

const MayInterest = () => {
  return (
    <div className="interest">
      <div className="head">
        <h2>You might be interested in</h2>
      </div>
      <div className="content-box">
        <Link to="#">
          <img src={discount} alt="Discount" />
        </Link>
        <Link to="#">
          <img src={discount_two} alt="Discount" />
        </Link>
        <Link to="#">
          <img src={discount} alt="Discount" />
        </Link>
      </div>
    </div>
  );
};

export default MayInterest;
