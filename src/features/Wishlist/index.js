import React from "react";
import EmptyContainer from "../../common/components/EmptyContainer";
import { wishlist_empty } from "../../common/images/images";
import "./Wishlist.scss";

const Wishlist = () => {
  return (
    <div className="wishlist">
      <EmptyContainer
        img={wishlist_empty}
        heading={"your deelbaba wishlist is empty!"}
        description={"add something to your wishlist and enjoy your shoping"}
      />
    </div>
  );
};

export default Wishlist;
