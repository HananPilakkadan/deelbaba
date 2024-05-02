import { useEffect, useState } from "react";
import {
  Medias,
  about,
  consumer,
  help,
} from "../../common/constants/constants";
import {
  amex,
  deelbaba,
  jcb,
  mastercard,
  visa,
} from "../../common/images/images";
import "../Footer/footer.scss";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const [noHeader, setNoHeader] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setNoHeader(location.pathname == "/address");
  }, [location]);
  return (
    <div className="footer">
      <div className="top">
        <div className="left">
          <div className="deelbaba">
            <img src={deelbaba} alt="logo" />
          </div>
          <ul>
            {Medias.map((item) => {
              const { id, media } = item;
              return (
                <li key={id}>
                  <img src={media} alt="media" />
                </li>
              );
            })}
          </ul>
        </div>
        {!noHeader ? (
          <>
            <div className="middle">
              <div>
                <h2>ABOUT</h2>
                {about.map((item) => {
                  const { id, text } = item;
                  return (
                    <div className="about" key={id}>
                      {text}{" "}
                    </div>
                  );
                })}
              </div>
              <div>
                <h2>HELP</h2>
                {help.map((item) => {
                  const { id, text } = item;
                  return (
                    <div className="help" key={id}>
                      {text}
                    </div>
                  );
                })}
              </div>
              <div>
                <h2>CONSUMER POLICY</h2>
                {consumer.map((item) => {
                  const { id, text } = item;
                  return (
                    <div className="consumer" key={id}>
                      {text}
                    </div>
                  );
                })}
              </div>
            </div>
            <hr />
            <div className="right">
              <div>
                <h2>Mail US: </h2>
                <p>deelbaba@gmail.com</p>
              </div>
              <div>
                <h2>OFFICE ADDRESS</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tem
                </p>
              </div>
            </div>
          </>
        ) : (
          <ul className="cards">
            <li>
              <img src={visa} alt="" />
            </li>
            <li>
              <img src={mastercard} alt="" />
            </li>
            <li>
              <img src={amex} alt="" />
            </li>
            <li>
              <img src={jcb} alt="" />
            </li>
          </ul>
        )}
      </div>
      <div className="bottom">
        <p>
          <span>&copy;</span> Deelbaba - All Rights Reserved
        </p>
        <p>Developed By Batheco</p>
      </div>
    </div>
  );
};
export default Footer;
