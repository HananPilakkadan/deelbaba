import React from "react";
import { categoryItems } from "../../constants/constants";
import CategoryItem from "./CategoryItem";
import "./CategoryBar.scss";

const Categorybar = () => {
  return (
    <div className="category_bar">
      {categoryItems?.map((item) => (
        <CategoryItem item={item} />
      ))}
    </div>
  );
};

export default Categorybar;
