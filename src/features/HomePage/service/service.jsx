import React from "react";

import ProfileCard from "../../../common/components/profileCard";
import { data } from "../../../common/constants/constants";

import "./service.scss"

export const ServiceComponent=()=>{
    return(
        <section className="service">
        <div className="left-section">
          <h1 class="serviceText">
            <span>Get</span> a service or<span> offer</span> a service
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="right-section">
          {data?.map((item) => {
            return <ProfileCard item={item} />;
          })}
        </div>
      </section>
    )
}