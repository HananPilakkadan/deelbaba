import React from "react";
import SearchBar from "../../common/components/searchBar";
import WorkCard from "../../common/components/workCard";
import { banner } from "../../common/images/images";
import "./WorkerList.scss";

const WorkersList = () => {
  const workCardData = [
    {
      id: 1,
      name: "Sandra Thomas",
      location: "Fort Kochi",
      distance: "12 km away",
      worksCompleted: 14,
    },
    {
      id: 2,
      name: "Sandra Thomas",
      location: "Fort Kochi",
      distance: "12 km away",
      worksCompleted: 14,
    },
    {
      id: 3,
      name: "Sandra Thomas",
      location: "Fort Kochi",
      distance: "12 km away",
      worksCompleted: 14,
    },
    {
      id: 4,
      name: "Sandra Thomas",
      location: "Fort Kochi",
      distance: "12 km away",
      worksCompleted: 14,
    },
    {
      id: 5,
      name: "Sandra Thomas",
      location: "Fort Kochi",
      distance: "12 km away",
      worksCompleted: 14,
    },
    {
      id: 6,
      name: "Sandra Thomas",
      location: "Fort Kochi",
      distance: "12 km away",
      worksCompleted: 14,
    },
  ];

  return (
    <div className="workers">
      <div className="searchBox">
        <SearchBar />
      </div>
      <div className="workers-list">
        {workCardData.map((card) => (
          <WorkCard
            key={card.id}
            name={card.name}
            location={card.location}
            distance={card.distance}
            worksCompleted={card.worksCompleted}
            path={`/workers/${card.id}`}
          />
        ))}
      </div>
      <div className="banner">
        <img src={banner} alt="" />
      </div>
      <div className="workers-list">
        {workCardData.slice(0, 3).map((card) => (
          <WorkCard
            key={card.id}
            name={card.name}
            location={card.location}
            distance={card.distance}
            worksCompleted={card.worksCompleted}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkersList;
