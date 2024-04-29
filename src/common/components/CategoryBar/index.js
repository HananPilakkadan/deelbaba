import React from "react";
import { categoryItems } from "../../constants/constants";
import CategoryItem from "./CategoryItem";
import "./CategoryBar.scss";
import OfferBanner from "../ProductOfferBanner";
import { control } from "../../images/images";

const Categorybar = () => {
  return (
    <div className="productList">
      <div className="category_bar">
        {categoryItems?.map((item) => (
          <CategoryItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default Categorybar;
