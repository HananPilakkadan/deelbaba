import {
  data,
  employers,
  features,
  promotion,
  cards,
} from "../../common/constants/constants";
import "./home.scss";
import Slider from "../../common/components/slider";
import Hamburger from "../Hamburger/hamburger";
import SpotLight from "../../common/components/spotlight/spotLight";
import { PromotionSection } from "./promotion/promotion";
import { ServiceComponent } from "./service/service";
import { PurchaseComponent } from "./Purchase/purchase";
import { CardCarousel } from "./cardCarousel/cardCarousel";

const Home = () => {
  return (
    <div className="home">
      <Hamburger />
      <SpotLight />
      <PromotionSection/>
     <ServiceComponent/>
     <PurchaseComponent/>
     <CardCarousel mapingData={cards} titleStart={'Best'} titleEnd={'Deals'} position={'start'}/>
     <CardCarousel mapingData={cards} titleStart={'Best'} titleEnd={'Deals'} position={'end'}/>

      <section className="christmas">
        <Slider className={"sliderOne"} />
      </section>
      <CardCarousel mapingData={employers} titleStart={'Find Your'} titleEnd={'Needs'}position={'start'}/>
      <CardCarousel mapingData={features} titleStart={'Fetured'} titleEnd={'Products'} position={'end'}/>

      <section className="christmas">
        <Slider className={"sliderOne"} />
      </section>
    </div>
  );
};
export default Home
