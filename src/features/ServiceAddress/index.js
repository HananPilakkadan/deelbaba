import React, { useState } from "react";
import "./ServiceAddress.scss";
import {
  address,
  cart_bag,
  credi_card,
  nurse,
  sneakers,
} from "../../common/images/images";
import { CiTrash } from "react-icons/ci";
import { HiPlus } from "react-icons/hi";
import { TbTruckDelivery } from "react-icons/tb";
import { Button, Modal } from "react-bootstrap";
import { SlCalender } from "react-icons/sl";
import { LuClock } from "react-icons/lu";

const ServiceAddress = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="address">
      <div className="address-box">
        <h6>Select Delivery Address</h6>
        <div className="address-wrapper">
          <div className="address-container">
            <ul>
              <li>
                <div className="button">
                  <input type="radio" name="" id="" />
                </div>
                <div className="content-box">
                  <h4>john mathew</h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Incidunt, totam esse! Tempore dolorum, ad ipsum impedit odit
                    recusandae ex aliquid.
                  </p>
                  <span>Mobile : 9000000</span>
                  <button>Edit</button>
                </div>
                <div className="trash">
                  <CiTrash />
                </div>
              </li>
              <li>
                <div className="button">
                  <input type="radio" name="" id="" />
                </div>
                <div className="content-box">
                  <h4>john mathew</h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Incidunt, totam esse! Tempore dolorum, ad ipsum impedit odit
                    recusandae ex aliquid.
                  </p>
                  <span>Mobile : 9000000</span>
                  <button>Edit</button>
                </div>
                <div className="trash">
                  <CiTrash />
                </div>
              </li>
              <li>
                <div className="button">
                  <input type="radio" name="" id="" />
                </div>
                <div className="content-box">
                  <h4>john mathew</h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Incidunt, totam esse! Tempore dolorum, ad ipsum impedit odit
                    recusandae ex aliquid.
                  </p>
                  <span>Mobile : 9000000</span>
                  <button>Edit</button>
                </div>
                <div className="trash">
                  <CiTrash />
                </div>
              </li>
              <li className="add" onClick={() => setModalActive(true)}>
                <HiPlus /> Add New Address
              </li>
            </ul>
          </div>
          <div className="nurse-box">
            <img src={nurse} alt="" />
            <h5>sandra thomas</h5>
            <span>Nurse</span>

            <div className="info-box">
              <p>fort kochi</p>
              <p>12 km away from your location </p>
              <p>14 work complited</p>
              <span>
                <SlCalender />
                26 december 2024
              </span>
              <span>
                <LuClock />
                05 pm - 07 pm
              </span>
            </div>
            <div className="bottom-box">
              <h4>
                john mathew <span>Home</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt 674839
              </p>
              <p>
                Mobile: <span>1234567890</span>
              </p>
              <button>Confirm</button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={modalActive}
        className="address-modal"
        onHide={() => setModalActive(false)}
      >
        <Modal.Body>
          <h5>Add New Address</h5>
          <div className="container-adress">
            <div className="item-box">
              <div className="item">
                <input type="text" name="fname" id="fname" />
                <label htmlFor="Fname">First Name</label>
              </div>
              <div className="item item-2">
                <input type="text" name="Lname" id="Lname" />
                <label htmlFor="Lname">Last Name</label>
              </div>
            </div>
            <div className="item-box">
              <div className="item">
                <input type="text" name="pin" id="pin" />
                <label htmlFor="pin">Pin Code</label>
              </div>
            </div>
            <div className="item-box">
              <div className="item">
                <input type="text" name="Address" id="Address" />
                <label htmlFor="Address">Address</label>
              </div>
            </div>
            <div className="item-box">
              <div className="item">
                <input type="text" name="Street" id="Street" />
                <label htmlFor="Street">Street</label>
              </div>
            </div>
            <div className="item-box">
              <div className="item">
                <input type="text" name="City" id="City" />
                <label htmlFor="City">City</label>
              </div>
            </div>
            <div className="item-box">
              <div className="item">
                <input type="text" name="State" id="State" />
                <label htmlFor="State">State</label>
              </div>
              <div className="item item-2">
                <input type="text" name="Country" id="Country" />
                <label htmlFor="Country">Country</label>
              </div>
            </div>
            <button>Add Address</button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ServiceAddress;
