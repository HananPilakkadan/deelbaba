import { IoIosClose } from "react-icons/io";
import Categorybar from "../../common/components/CategoryBar";
import OfferBanner from "../../common/components/ProductOfferBanner";
import Navbar from "../../common/components/navBar";
import { adidas, control, zara } from "../../common/images/images";
import { features } from "../../common/constants/constants";
import FeatureCard from "../../common/components/featureCard";
import "./productList.scss";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import CommonModal from "../../common/components/CommonModal";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductList = () => {
  const [show, setShow] = useState(false);
  const handleModal = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="product">
      {/* <Navbar /> */}
      <Categorybar />
      <OfferBanner />
      <div className="filterbox">
        <button onClick={handleModal}>
          Filters <img src={control} alt="" />
        </button>
        <div className="selected">
          <button>
            All <IoIosClose />
          </button>
        </div>
      </div>
      <div className="product-wrapper">
        <div className="product-items">
          {features.map((items, index) => (
            <FeatureCard items={items} margin={true} />
          ))}
        </div>
        <div className="product-items banner-row">
          <FeatureCard items={features[0]} margin={true} />
          <div className="banner-img">
            <img src={adidas} alt="Adidas" />
          </div>
        </div>
        <div className="product-items">
          {features?.slice(0, 4).map((items) => {
            return <FeatureCard items={items} margin={true} />;
          })}
        </div>
        <div className="product-items banner-row">
          <div className="banner-img">
            <img src={zara} alt="Zara" />
          </div>
          <FeatureCard items={features[3]} margin={true} />
        </div>
        <div className="product-items">
          {features?.slice(4, 8).map((items) => {
            return <FeatureCard items={items} margin={true} />;
          })}
        </div>
      </div>
      <CommonModal
        handleModal={handleModal}
        show={show}
        content={
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Category</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Type</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Price</Accordion.Header>
              <Accordion.Body>
                <h3>Price</h3>
                <ul>
                  <li>
                    <input type="radio" name="500" id="500" />
                    <label htmlFor="500">500 - 100</label>
                  </li>
                  <li>
                    <input type="radio" name="1000" id="1000" />
                    <label htmlFor="500">1000 - 2000</label>
                  </li>
                  <li>
                    <input type="radio" name="2000" id="2000" />
                    <label htmlFor="500">2000 - 3000</label>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Gender</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Size</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Colour</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        }
      />
      ;
    </div>
  );
};
export default ProductList;
