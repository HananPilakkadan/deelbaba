import { useEffect, useState } from "react";
import { deelbaba, avatar, wallet } from "../images/images";
import Button from "./button";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [noHeader, setNoHeader] = useState();
  const location = useLocation();
  useEffect(() => {
    setNoHeader(location.pathname == "/address");
  }, [location]);
  return (
    <div className="nav-bar">
      <div className="logo-container">
        <Link to="/">
          <img src={deelbaba} alt="logo" />
        </Link>
      </div>
      {!noHeader && (
        <ul className="middle">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      )}
      {!noHeader && (
        <div className="right-section">
          <div className="img-container">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="img-container">
            <img src={wallet} alt="wallet" />
          </div>
          <Button className={"login"} buttonText={"Login/Register"} />
        </div>
      )}
    </div>
  );
};
export default Navbar;
