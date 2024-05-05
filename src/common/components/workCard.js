import React from "react";
import { nurseimg, union } from "../../common/images/images";
import Button from "./button";
import { Link } from "react-router-dom";

const WorkCard = ({ name, location, distance, worksCompleted, path }) => {
  return (
    <div className="union">
      <div className="unionContainer">
        <img className="unionimg" src={union} alt="" />
      </div>
      <div className="img">
        <img src={nurseimg} alt="nurseimg" />
      </div>
      <p className="title">{name}</p>
      <p className="place">
        <span>{location}</span> <span>{distance}</span>{" "}
        <span>{worksCompleted} work completed</span>
      </p>
      <Link to={path}>
        <Button className="buttonSchedule" buttonText={"Schedule"} />
      </Link>
      <Button className="buttonSee" buttonText={"See More"} />
    </div>
  );
};

export default WorkCard;
