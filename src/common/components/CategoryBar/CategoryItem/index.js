import React from "react";
import "./CategoryItem.scss";

const CategoryItem = ({ item }) => {
  return (
    <div className="categoryItem">
      <img src={item?.image} alt={item.name} />
      <h6>{item.name}</h6>
    </div>
  );
};

export default CategoryItem;
