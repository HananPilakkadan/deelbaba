import React, { useState } from "react";
import "./Address.scss";
import {
  address,
  cart_bag,
  credi_card,
  sneakers,
} from "../../common/images/images";
import { CiTrash } from "react-icons/ci";
import { HiPlus } from "react-icons/hi";
import { TbTruckDelivery } from "react-icons/tb";
import { Button, Modal } from "react-bootstrap";

const Address = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="address">
      <div className="path-box">
        <ul>
          <li>
            <img src={cart_bag} alt="" />
            <span>BAG</span>
          </li>
          <hr />
          <li>
            <img src={address} alt="" />
            <span>ADDRESS</span>
          </li>
          <hr />
          <li>
            <img src={credi_card} alt="" />
            <span>PAYMENT</span>
          </li>
        </ul>
      </div>
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
          <div className="billing">
            <ul>
              <li>
                <div className="container-wrapper">
                  <div className="img-box">
                    <img src={sneakers} alt="" />
                  </div>
                  <div className="content">
                    <h5>ULTRABOOST 1.0 SHOES</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptate, officiis!
                    </p>
                  </div>
                </div>

                <p className="delivery">
                  EXPECTED BY MON, JAN 01
                  <TbTruckDelivery />
                </p>
              </li>
              <li>
                <div className="container-wrapper">
                  <div className="img-box">
                    <img src={sneakers} alt="" />
                  </div>
                  <div className="content">
                    <h5>ULTRABOOST 1.0 SHOES</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptate, officiis!
                    </p>
                  </div>
                </div>

                <p className="delivery">
                  EXPECTED BY MON, JAN 01
                  <TbTruckDelivery />
                </p>
              </li>
            </ul>
            <div className="price-box">
              <h5>price details (2 items)</h5>
              <ul>
                <li>
                  <span>amount</span>
                  <span>₹10500</span>
                </li>
                <li>
                  <span>discount</span>
                  <span className="discount">₹2100</span>
                </li>
                <li>
                  <span>delivery</span>
                  <span>Free</span>
                </li>
              </ul>
              <div className="total-box">
                <div className="item">
                  <h5>GRAND TOTAL</h5>
                  <p>PRICES INCLUDE GST</p>
                </div>
                <span>₹8400</span>
              </div>
              <button>Continue</button>
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

export default Address;
