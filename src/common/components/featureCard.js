import { useState } from "react";
import { shoppingCart, star } from "../images/images";
import Button from "./button";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const FeatureCard = ({ items, margin }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();
  const { id, item, rating, text, price, description, discount, offer } = items;

  const handleNavigate = () => {
    navigate(`product/${id}`, { relative: "path" });
  };

  return (
    <div
      className="feature-card"
      style={margin && { margin: "10px" }}
      onClick={handleNavigate}
    >
      <div className="feature-image" key={id}>
        <div className="product-image">
          <img src={item} alt="item" />
        </div>
        <span>
          <div className="rate-container">
            <p>{rating}</p>
            <div className="star-container">
              <img src={star} alt="images" />
            </div>
          </div>
          <div className="favourite">
            {isFavorite ? (
              <IoIosHeart
                className="favorite-icon"
                onClick={() => setIsFavorite(false)}
              />
            ) : (
              <IoIosHeartEmpty
                className="favorite-icon"
                onClick={() => setIsFavorite(true)}
              />
            )}
          </div>
        </span>
      </div>
      <div className="feature-card-content">
        <h1>{text}</h1>
        <p>{description}</p>
        <div className="offer">
          <b>{price}</b>
          <s>{discount}</s>
          <p>{offer}</p>
        </div>
      </div>
      <div className="button-section">
        <Button className="feature-button" buttonText="Buy now" />
        <div className="cartimg-container">
          <img src={shoppingCart} alt="shopping-cart" />
        </div>
      </div>
    </div>
  );
};
export default FeatureCard;
