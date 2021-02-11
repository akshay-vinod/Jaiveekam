import React from "react";
import "./Values.css";

const Values = () => {
  return (
    <div className="gg">
      <div className="value-heading">
        <p>Our value propositions to farmers</p>
      </div>
      <div className="values">
        <div className="values-1">
          <div className="value-card">
            <img src="images/convenience.svg" />
            <div className="value-content">
              <p className="p-head">CONVENIENCE</p>
              <p className="p-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                semper magna sapien
              </p>
            </div>
          </div>
          <div className="value-card">
            <img src="images/customer-service.svg" />
            <div className="value-content">
              <p className="p-head">CUSTOMER SERVICE</p>
              <p className="p-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                semper magna sapien
              </p>
            </div>
          </div>
          <div className="value-card">
            <img src="images/expert.svg" />
            <div className="value-content">
              <p className="p-head">EXPERT ADVICE</p>
              <p className="p-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                semper magna sapien
              </p>
            </div>
          </div>
        </div>
        <div className="values-2">
          <div className="value-card">
            <img src="images/mobile.svg" />
            <div className="value-content">
              <p className="p-head">EASY ACCESSIBILITY</p>
              <p className="p-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                semper magna sapien
              </p>
            </div>
          </div>
          <div className="value-card">
            <img src="images/price.svg" />
            <div className="value-content">
              <p className="p-head">FAIR PRICE</p>
              <p className="p-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                semper magna sapien
              </p>
            </div>
          </div>
          <div className="value-card">
            <img src="images/quality.svg" />
            <div className="value-content">
              <p className="p-head">QUALITY</p>
              <p className="p-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                semper magna sapien
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Values;
