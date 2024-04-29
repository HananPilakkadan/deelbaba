import React from 'react';
import WorkCard from "../../common/components/workCard";
import "./style.scss"
const Index = () => {
  // Assuming this is your data representing each work card
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
    }, {
      id: 3,
      name: "Sandra Thomas",
      location: "Fort Kochi",
      distance: "12 km away",
      worksCompleted: 14,
    }, {
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
    // Add more objects representing each work card as needed
  ];

  return (
    <div className='card-wrap'>
      {workCardData.map((card) => (
        <WorkCard
          key={card.id}
          name={card.name}
          location={card.location}
          distance={card.distance}
          worksCompleted={card.worksCompleted}
        />
      ))}
    </div>
  );
};

export default Index;
