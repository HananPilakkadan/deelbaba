import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../common/components/navBar";
import Home from "../features/HomePage/homepage";
import Services from "../features/Services";
import Hamburger from "../features/Hamburger/hamburger";
import Footer from "../features/Footer/footer";
import Work from "../features/Work";
import ProductList from "../features/ProductList/productList";
import AutoMobile from "../features/AutoMobile";
import ProductSingle from "../features/ProductSingle";
import Cart from "../features/Cart";
import Address from "../features/Address";
import { useEffect, useState } from "react";
import ScrollToTop from "../common/constants/scrollTop";
import WorkersList from "../features/WorkersList";
import ServiceSingle from "../features/ServiceSingle";
import ServiceAddress from "../features/ServiceAddress";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />{" "}
          <Route path="/work-detail" element={<Work />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/automobile" element={<AutoMobile />} />
          <Route path="/product/:id" element={<ProductSingle />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/address" element={<Address />} />
          <Route path="/workers" element={<WorkersList />} />
          <Route path="/workers/:id" element={<ServiceSingle />} />
          <Route path="/service-address" element={<ServiceAddress />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};
export default Router;
