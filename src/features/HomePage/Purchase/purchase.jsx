import React from "react";

import "./purchase.scss"
import { lady, redirection } from "../../../common/images/images";
import Button from "../../../common/components/button";

export const PurchaseComponent =()=>{
    return(
        <div class="purchase">
        <div className="purchase-content">
          <div className="img-container">
            <img src={lady} alt="lady" />
          </div>
          <div className="purchase-right">
            <h1 className="purchase-text">
              Purchase <span> everything as your </span> need{" "}
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="button">
              <Button className={"explore"} buttonText={"Explore"} btnImg={redirection} />
            </div>
            <div className="purchase-overlay"></div>
          </div>
        </div>
      </div>
    )
}