import React from "react";
import { Link } from "react-router-dom";

export default function ServiceEmployeCard({ item }) {
  const { id, title, photo, } = item;

  return (
    <div className="needContainer" key={id}>
      <div className="container">
        <div className="imgContainer">
          <img className="img" src={photo} alt="" />
        </div>
        <h1 className="text">{title}</h1>
        <div className="buttons">
          <Link className="work" to="/work-detail">
             Work
          </Link>
          <Link to="/hire-detail" className="hire">
            Hire
          </Link>
        </div>
      </div>
    </div>
  );
}
