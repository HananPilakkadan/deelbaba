import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../common/components/navBar";
import Home from "../features/HomePage/homepage";
import Services from "../features/Services";
import Hamburger from "../features/Hamburger/hamburger";
import Footer from "../features/Footer/footer";
import Work from "../features/Work";
import ProductList from "../features/ProductList/productList";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />{" "}
        <Route path="/work-detail" element={<Work />} />
        <Route path="/product-list" element={<ProductList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
