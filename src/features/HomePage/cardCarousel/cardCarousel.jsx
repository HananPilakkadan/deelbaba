import React, { useEffect, useState } from "react";

import "./cardCarousel.scss"
import { cards, data, employers, features } from "../../../common/constants/constants";
import Employercard from "../../../common/components/employerCard/employerCard";
import FeatureCard from "../../../common/components/featureCard";
import DeelCards from "../../../common/components/DeelSaveingCard/deelCards";


export const CardCarousel=({mapingData,titleStart,titleEnd,position})=>{

    const [headingPosition,setHeadingPosition]= useState('')

  useEffect(()=>{
    setHeadingPosition(position)
  },[headingPosition])

   const  renderComponent=(item)=>{
        switch(mapingData){
            case  cards:
            return(
                 <DeelCards item={item}/>
            )
            case employers:
                return(
                    <Employercard item={item}/>
                )
            case features:
                return(
                    <FeatureCard items={item}/>
                )    
            default:
                break
        }
    }


    return(
        <section className="features">
        <div className="features-top" style={headingPosition =='end'?{flexDirection:"row-reverse"}:{flexDirection:'unset'}}>
            <h2 className="feature-title">{titleStart}  <span>{titleEnd}</span></h2>
          <hr className="line" />
        </div>
        <div className="features-bottom">
          {mapingData.map((item) => {
            return renderComponent(item);
          })}
        </div>
      </section>
    )
}