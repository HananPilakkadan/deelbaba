import React from "react";

import { promotion } from "../../../common/constants/constants";

import "./promotion.scss";

export const PromotionSection = () => {
  return (
    <section className="promotion">
      {promotion?.map((item) => {
        const { id, text, content, logo } = item;
        return (
          <div className="promo" key={id}>
            <div className="img-container">
              <img src={logo} alt="logo" />
            </div>
            <div className="promo-sub">
              <h1>{text}</h1>
              <p>{content}</p>
            </div>
            {(id === 1 || id === 2 || id === 3) && <hr />}
          </div>
        );
      })}
    </section>
  );
};
