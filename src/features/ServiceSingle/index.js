import React from "react";
import {
  dislike,
  kripaa,
  like,
  nurseimg,
  rating,
  sun_icon,
} from "../../common/images/images";
import "./ServiceSingle.scss";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";

const ServiceSingle = () => {
  return (
    <div className="sevice-single">
      <div className="service-single-wrappper">
        <div className="right-box">
          <div className="user-box">
            <img src={nurseimg} alt="" />
            <h5>sandra thomas</h5>
            <span>nurse</span>
            <p>Fort Kochi</p>
            <p>12 km away </p>
            <p>14 work complited</p>
          </div>
          <div className="work-photos">
            <h5>Work Photos</h5>
            <ul>
              <li>
                <img src={kripaa} alt="" />
              </li>
              <li>
                <img src={kripaa} alt="" />
              </li>
              <li>
                <img src={kripaa} alt="" />
              </li>
              <li>
                <img src={kripaa} alt="" />
              </li>
              <li>
                <img src={kripaa} alt="" />
              </li>
            </ul>
          </div>
          <div className="work-review">
            <div className="head">
              <h5>rating & review</h5>
              <p>(29 ratings and 12 reviews)</p>
            </div>
            <ul>
              <li>
                <span>Darrell Steward</span>
                <div className="work-rating">
                  <img src={rating} alt="" />
                  <small>(4.5)</small>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores modi perferendis ipsa numquam? Ducimus vitae ex sint
                  est? Delectus, rerum.
                </p>
                <div className="bottom">
                  <img src={like} alt="" />
                  <img src={dislike} alt="" />
                </div>
              </li>
              <li>
                <span>Darrell Steward</span>
                <div className="work-rating">
                  <img src={rating} alt="" />
                  <small>(4.5)</small>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores modi perferendis ipsa numquam? Ducimus vitae ex sint
                  est? Delectus, rerum.
                </p>
                <div className="bottom">
                  <img src={like} alt="" />
                  <img src={dislike} alt="" />
                </div>
              </li>
              <li>
                <span>Darrell Steward</span>
                <div className="work-rating">
                  <img src={rating} alt="" />
                  <small>(4.5)</small>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores modi perferendis ipsa numquam? Ducimus vitae ex sint
                  est? Delectus, rerum.
                </p>
                <div className="bottom">
                  <img src={like} alt="" />
                  <img src={dislike} alt="" />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="left-box">
          <div className="time-container">
            <div className="head">
              <h5>schedule availability</h5>
              <span>
                <SlCalender />
              </span>
            </div>
            <div className="timeline">
              <div className="itme">
                <span>
                  {" "}
                  DEC <br />
                  26
                </span>
              </div>
              <div className="itme">
                <span>
                  {" "}
                  DEC <br />
                  26
                </span>
              </div>
              <div className="itme">
                <span>
                  {" "}
                  DEC <br />
                  26
                </span>
              </div>
              <div className="itme">
                <span>
                  {" "}
                  DEC <br />
                  26
                </span>
              </div>
              <div className="itme">
                <span>
                  {" "}
                  DEC <br />
                  26
                </span>
              </div>
              <div className="itme">
                <span>
                  {" "}
                  DEC <br />
                  26
                </span>
              </div>
            </div>
            <div className="slots">
              <ul>
                <li className="full">9.30 AM - 11 AM</li>
                <li className="full">9.30 AM - 11 AM</li>
                <li className="available">9.30 AM - 11 AM</li>
                <li className="available">9.30 AM - 11 AM</li>
                <li className="select">9.30 AM - 11 AM</li>
                <li className="full">9.30 AM - 11 AM</li>
              </ul>
            </div>
            <Link to={"/service-address"}>
              <button>Continue</button>
            </Link>
          </div>
          <div className="terms">
            <h4>Terms & Conditions</h4>
            <ul>
              <li>
                <img src={sun_icon} alt="" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </li>
              <li>
                <img src={sun_icon} alt="" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod{" "}
              </li>
              <li>
                <img src={sun_icon} alt="" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliquaut
                labore et dolore magna aliqua
              </li>
              <li>
                <img src={sun_icon} alt="" />
                Lorem ipsum dolor sit amet, consectetur{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSingle;
