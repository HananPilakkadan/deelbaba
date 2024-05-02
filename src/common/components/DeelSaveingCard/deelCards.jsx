import React from "react";

import "./deelCard.scss"



const DeelCards = ({ item }) => {
    return (
        <div className="deelCard" key={item?.id}>
            <div className="bg-container">
                <img src={item?.background} alt="card" />
                <div className="shade"></div>
            </div>
            <div className="card-content">
                <h1>{item?.text}</h1>
                <p>{item?.rate}</p>
            </div>
           
        </div>
    )
}
export default DeelCards;