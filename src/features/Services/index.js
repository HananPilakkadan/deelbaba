import React from "react";
import SpotLight from "../../common/components/spotlight/spotLight";
import { employers, flatDummy } from "../../common/constants/constants";
import ServiceEmployeCard from "../../common/components/serviceEmployeCard";
import Footer from "../Footer/footer";
import Hamburger from "../Hamburger/hamburger";

function Index() {
  const renderEmployees = (index, count) => {
    return employers.slice(index, index + count).map((item) => {
      const { id } = item;
      return <ServiceEmployeCard key={id} item={item} />;
    });
  };

  return (
    <div>
      <Hamburger />
      <SpotLight />
      <div className="employersCard">
        {renderEmployees(0, 10)}
        <div className="FlatOfferContainer">
          {flatDummy?.map((item) => {
            const { img } = item;
            return (
              <div>
                <img
                  style={{ width: "100%", display: "block" }}
                  src={img}
                  alt="Dummy Image"
                />
              </div>
            );
          })}
        </div>
        {renderEmployees(10, 10)}
      </div>
    </div>
  );
}

export default Index;
