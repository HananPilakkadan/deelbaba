import React from "react";
import "./EmptyContainer.scss";
import { Link } from "react-router-dom";

const EmptyContainer = ({ img, heading, description }) => {
  return (
    <div className="cart-empty">
      <img src={img} alt="" />
      <h5>{heading}</h5>
      <p>{description}</p>
      <Link to="/">Back to shopping</Link>
    </div>
  );
};

export default EmptyContainer;
