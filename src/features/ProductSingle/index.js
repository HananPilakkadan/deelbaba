import React, { useEffect, useState } from "react";
import {
  delivery,
  product,
  review_image,
  rupee,
  sneakers,
  star,
  unboxing,
} from "../../common/images/images";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import "./ProductSingle.scss";
import { Link, useParams } from "react-router-dom";
import MayInterest from "../../common/components/MayInterest";
import { features } from "../../common/constants/constants";
import FeatureCard from "../../common/components/featureCard";

const ProductSingle = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isColor, setIsColor] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSizeIndex, setActiveSizeIndex] = useState(null);
  const [data, setData] = useState();

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  const handleSize = (index) => {
    setActiveSizeIndex(index);
  };
  const colors = ["#BA8989", "#DEDED8", "#C8BE5D", "#8782C1"];
  const Sizes = ["UK4", "UK4", "UK4", "UK4"];
  const { id } = useParams();

  useEffect(() => {
    setData(features.filter((item) => item?.id == id));
  }, []);

  return (
    <div className="Product_single">
      <div className="products-wrapper">
        <div className="product-view">
          <div className="top">
            <span>NEW</span>
            <div
              className="favourite"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              {isFavorite ? (
                <IoIosHeart className="favorite-icon" />
              ) : (
                <IoIosHeartEmpty className="favorite-icon" />
              )}
            </div>
          </div>
          <div className="image-view">{<img src={sneakers} alt="" />}</div>
          <div className="button-box">
            <button>BUY NOW</button>
            <button>ADD TO CART</button>
          </div>
        </div>
        <div className="info-box">
          <span>adidas</span>
          <h2>ULTRABOOST 1.0</h2>
          <ul>
            <li>Men</li>
            <li>Sportswear</li>
          </ul>
          <div className="price">
            $3500 <span>4200</span> <small>20% OFF</small>
            <p>(Inclusive of all taxes)</p>
          </div>
          <div className="seller">
            <h5>Seller</h5>
            <p>ADIDAS INDIA MARKETING PRIVATE LIMITED</p>
            <span>View Vender Information</span>
          </div>
          <div className="rating">
            4.5 <img src={star} alt="Star" />
          </div>
          <hr />
          <div className="color">
            <h6>colour</h6>
            <ul>
              {colors.map((color, index) => (
                <li
                  key={index}
                  style={{ background: color }}
                  className={activeIndex === index ? "active" : ""}
                  onClick={() => handleClick(index)}
                ></li>
              ))}
            </ul>
          </div>
          <div className="sizes">
            <h6>Size</h6>
            <div className="bottom">
              <ul>
                {Sizes.map((size, index) => (
                  <li
                    key={index}
                    className={activeSizeIndex === index ? "active" : ""}
                    onClick={() => handleSize(index)}
                  >
                    {size}
                  </li>
                ))}
              </ul>
              <span>Size chart</span>
            </div>
          </div>
          <div className="detaials">
            <ul>
              <li>
                <img src={rupee} alt="" />
                <span>
                  Cash on Delivery <br /> available
                </span>
              </li>
              <li>
                <img src={delivery} alt="" />
                <span>
                  7 Day Return <br /> Policy
                </span>
              </li>
              <li>
                <img src={unboxing} alt="" />
                <span>
                  Unboxing on delivery <br /> Time
                </span>
              </li>
            </ul>
          </div>
          <div className="description">
            <h6>Description</h6>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem temporibus cumque explicabo! Vel aspernatur
              perspiciatis voluptate nostrum dolor cum doloribus?
            </p>
          </div>
          <div className="product-details">
            <h6>Product Details</h6>
            <table>
              <tr>
                <td className="bold">product details</td>
                <td>product details</td>
              </tr>
              <tr>
                <td className="bold">Closure type</td>
                <td>Lace-Up</td>
              </tr>
              <tr>
                <td className="bold">Water resistance level</td>
                <td>Water Resistant</td>
              </tr>
              <tr>
                <td className="bold">Sole material</td>
                <td>Ethylene Vinyl Acetate</td>
              </tr>
              <tr>
                <td className="bold">Style</td>
                <td>Sports Shoes</td>
              </tr>
              <tr>
                <td className="bold">Country of Origin</td>
                <td>India</td>
              </tr>
            </table>
          </div>
          <div className="rating-review">
            <div className="head">
              <h6>Ratings & Reviews</h6>
              <p>(1,629 ratings and 91 reviews)</p>
            </div>
            <div className="rate-star">
              <div className="left">
                <h5>4.5</h5>
                <span>Very Good</span>
              </div>
              <div className="right">
                <button>Rate Product</button>
              </div>
            </div>
            <div className="users">
              <div className="user">
                <span>Andria Luiz</span>
                <div className="star">
                  <svg
                    width="65"
                    height="30"
                    viewBox="0 0 58 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 10L6.12257 6.54508H9.75528L6.81636 4.40983L7.93893 0.954915L5 3.09017L2.06107 0.954915L3.18364 4.40983L0.244718 6.54508H3.87743L5 10Z"
                      fill="#26A43A"
                    />
                    <path
                      d="M17 10L18.1226 6.54508H21.7553L18.8164 4.40983L19.9389 0.954915L17 3.09017L14.0611 0.954915L15.1836 4.40983L12.2447 6.54508H15.8774L17 10Z"
                      fill="#26A43A"
                    />
                    <path
                      d="M29 10L30.1226 6.54508H33.7553L30.8164 4.40983L31.9389 0.954915L29 3.09017L26.0611 0.954915L27.1836 4.40983L24.2447 6.54508H27.8774L29 10Z"
                      fill="#26A43A"
                    />
                    <path
                      d="M41 10L42.1226 6.54508H45.7553L42.8164 4.40983L43.9389 0.954915L41 3.09017L38.0611 0.954915L39.1836 4.40983L36.2447 6.54508H39.8774L41 10Z"
                      fill="#26A43A"
                    />
                    <path
                      d="M53 10L54.1226 6.54508H57.7553L54.8164 4.40983L55.9389 0.954915L53 3.09017L50.0611 0.954915L51.1836 4.40983L48.2447 6.54508H51.8774L53 10Z"
                      fill="#D9D9D9"
                    />
                  </svg>

                  <span>(4.0)</span>
                </div>
                <div className="images">
                  <ul>
                    <li>
                      <img src={review_image} alt="" />
                    </li>
                    <li>
                      <img src={review_image} alt="" />
                    </li>
                    <li>
                      <img src={review_image} alt="" />
                    </li>
                  </ul>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
            </div>
            <div className="users">
              <div className="user">
                <span>Andria Luiz</span>
                <div className="star">
                  <svg
                    width="65"
                    height="30"
                    viewBox="0 0 58 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 10L6.12257 6.54508H9.75528L6.81636 4.40983L7.93893 0.954915L5 3.09017L2.06107 0.954915L3.18364 4.40983L0.244718 6.54508H3.87743L5 10Z"
                      fill="#26A43A"
                    />
                    <path
                      d="M17 10L18.1226 6.54508H21.7553L18.8164 4.40983L19.9389 0.954915L17 3.09017L14.0611 0.954915L15.1836 4.40983L12.2447 6.54508H15.8774L17 10Z"
                      fill="#26A43A"
                    />
                    <path
                      d="M29 10L30.1226 6.54508H33.7553L30.8164 4.40983L31.9389 0.954915L29 3.09017L26.0611 0.954915L27.1836 4.40983L24.2447 6.54508H27.8774L29 10Z"
                      fill="#26A43A"
                    />
                    <path
                      d="M41 10L42.1226 6.54508H45.7553L42.8164 4.40983L43.9389 0.954915L41 3.09017L38.0611 0.954915L39.1836 4.40983L36.2447 6.54508H39.8774L41 10Z"
                      fill="#26A43A"
                    />
                    <path
                      d="M53 10L54.1226 6.54508H57.7553L54.8164 4.40983L55.9389 0.954915L53 3.09017L50.0611 0.954915L51.1836 4.40983L48.2447 6.54508H51.8774L53 10Z"
                      fill="#D9D9D9"
                    />
                  </svg>

                  <span>(4.0)</span>
                </div>
                <div className="images">
                  <ul>
                    <li>
                      <img src={review_image} alt="" />
                    </li>
                    <li>
                      <img src={review_image} alt="" />
                    </li>
                    <li>
                      <img src={review_image} alt="" />
                    </li>
                  </ul>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
            </div>
            <div className="users">
              <div className="user">
                <span>Andria Luiz</span>
                <div className="star">
                  <svg
                    width="65"
                    height="30"
                    viewBox="0 0 58 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 10L6.12257 6.54508H9.75528L6.81636 4.40983L7.93893 0.954915L5 3.09017L2.06107 0.954915L3.18364 4.40983L0.244718 6.54508H3.87743L5 10Z"
                      fill="#26A43A"
                    />
                    <path
                      d="M17 10L18.1226 6.54508H21.7553L18.8164 4.40983L19.9389 0.954915L17 3.09017L14.0611 0.954915L15.1836 4.40983L12.2447 6.54508H15.8774L17 10Z"
                      fill="#26A43A"
                    />
                    <path
                      d="M29 10L30.1226 6.54508H33.7553L30.8164 4.40983L31.9389 0.954915L29 3.09017L26.0611 0.954915L27.1836 4.40983L24.2447 6.54508H27.8774L29 10Z"
                      fill="#26A43A"
                    />
                    <path
                      d="M41 10L42.1226 6.54508H45.7553L42.8164 4.40983L43.9389 0.954915L41 3.09017L38.0611 0.954915L39.1836 4.40983L36.2447 6.54508H39.8774L41 10Z"
                      fill="#26A43A"
                    />
                    <path
                      d="M53 10L54.1226 6.54508H57.7553L54.8164 4.40983L55.9389 0.954915L53 3.09017L50.0611 0.954915L51.1836 4.40983L48.2447 6.54508H51.8774L53 10Z"
                      fill="#D9D9D9"
                    />
                  </svg>

                  <span>(4.0)</span>
                </div>
                <div className="images">
                  <ul>
                    <li>
                      <img src={review_image} alt="" />
                    </li>
                    <li>
                      <img src={review_image} alt="" />
                    </li>
                    <li>
                      <img src={review_image} alt="" />
                    </li>
                  </ul>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
            </div>
            <div className="view-all">
              <Link to="#">View All Reviews</Link>
            </div>
          </div>
        </div>
      </div>
      <MayInterest />

      <div className="similar">
        <h6>Similar Products</h6>
        <div className="content">
          {features.map((items, index) => (
            <FeatureCard items={items} margin={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSingle;
