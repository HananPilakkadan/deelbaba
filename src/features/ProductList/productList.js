import { IoIosClose } from "react-icons/io";
import Categorybar from "../../common/components/CategoryBar";
import OfferBanner from "../../common/components/ProductOfferBanner";
import Navbar from "../../common/components/navBar";
import { adidas, control, zara } from "../../common/images/images";
import { features } from "../../common/constants/constants";
import FeatureCard from "../../common/components/featureCard";
import "./productList.scss";

const ProductList = () => {
  return (
    <div className="product">
      {/* <Navbar /> */}
      <Categorybar />
      <OfferBanner />
      <div className="filterbox">
        <button>
          Filters <img src={control} alt="" />
        </button>
        <div className="selected">
          <button>
            All <IoIosClose />
          </button>
        </div>
      </div>
      <div className="product-items">
        {features.map((items) => {
          return <FeatureCard items={items} margin={true} />;
        })}
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
  );
};
export default ProductList;
