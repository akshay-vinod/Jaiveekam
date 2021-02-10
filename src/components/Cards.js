import React from "react";
import "./Cards.css";
const Cards = () => {
  return (
    <div>
      <img src="/images/Liquid-Cheese3.svg" className="bgpattern" />
      <div className="leaf">
        <img className="adjleaf" src="/images/leaf.svg" />
      </div>
      <div className="container gfont">
        <div className="card-s">
          <div className="row">
            <h4 className="display-5">Creating opportunities for everyone</h4>
          </div>
          <div className="row">
            <p className="lead mt-3">
              We are the first platform enabling increased benefits for farmers,
              retailers, and consumers.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-1"></div>
            <div className="col-3">
              <div className="card cards">
                <div className="card-body">
                  <img className="icons" src="/images/farmer.svg" alt="" />
                  <h4 className="card-title">Benefits for farmers</h4>
                  <div className="card-text">
                    <p>Competetive Pricing</p>
                    <p>Doorstep delivery</p>
                    <p>High quality graded produce</p>
                    <p>Transparent weighing</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card cards">
                <div className="card-body">
                  <img
                    className="icons"
                    src="/images/undraw_business_shop_qw5t.svg"
                    alt=""
                  />
                  <h4 className="card-title">Convenience for retailers</h4>
                  <div className="card-text">
                    <p>Competetive Pricing</p>
                    <p>Doorstep delivery</p>
                    <p>High quality graded produce</p>
                    <p>Transparent weighing</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card cards">
                <div className="card-body">
                  <img
                    className="icons"
                    src="/images/undraw_successful_purchase_uyin.svg"
                    alt=""
                  />
                  <h4 className="card-title">Savings for consumers</h4>
                  <div className="card-text">
                    <p>Competetive Pricing</p>
                    <p>Doorstep delivery</p>
                    <p>High quality graded produce</p>
                    <p>Transparent weighing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
