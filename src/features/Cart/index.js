import React from "react";
import { sneakers } from "../../common/images/images";
import { CiTrash } from "react-icons/ci";
import "./Cart.scss";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-wrapper">
        <h6>Your Cart</h6>
        <div className="content">
          <div className="left">
            <div className="item">
              <div className="img-box">
                <img src={sneakers} alt="" />
              </div>
              <div className="info">
                <h6>ULTRABOOST 1.0 SHOES</h6>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor
                </p>
                <h3 className="price">$3500</h3>
                <span className="old-price">4200</span>

                <p className="size">Size: UK 5</p>
                <select name="qty" id="qty">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <span className="stock">in stock</span>
              </div>
              <div className="trash">
                <CiTrash />
              </div>
            </div>
            <div className="item">
              <div className="img-box">
                <img src={sneakers} alt="" />
              </div>
              <div className="info">
                <h6>ULTRABOOST 1.0 SHOES</h6>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor
                </p>
                <h3 className="price">$3500</h3>
                <span className="old-price">4200</span>

                <p className="size">Size: UK 5</p>
                <select name="qty" id="qty">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <span className="stock">in stock</span>
              </div>
              <div className="trash">
                <CiTrash />
              </div>
            </div>
            <div className="item">
              <div className="img-box">
                <img src={sneakers} alt="" />
              </div>
              <div className="info">
                <h6>ULTRABOOST 1.0 SHOES</h6>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor
                </p>
                <h3 className="price">$3500</h3>
                <span className="old-price">4200</span>

                <p className="size">Size: UK 5</p>
                <select name="qty" id="qty">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <span className="stock">in stock</span>
              </div>
              <div className="trash">
                <CiTrash />
              </div>
            </div>
          </div>
          <div className="right">
            <div className="details-box">
              <h4>ORDER DETAILS</h4>
              <ul>
                <li>
                  <span>3 Items</span>
                  <span>$10500</span>
                </li>
                <li>
                  <span>You Saved</span>
                  <span className="saved">$2500</span>
                </li>
                <li>
                  <span>Delivery</span>
                  <span>Free</span>
                </li>
              </ul>
              <div className="total">
                <div className="left">
                  <h4>Grand Total</h4>
                  <p>PRICES INCLUDE GST</p>
                </div>
                <div className="right-box">
                  <span>$10500</span>
                </div>
              </div>
              <button>
                <Link to="/address">PLACE ORDER</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
