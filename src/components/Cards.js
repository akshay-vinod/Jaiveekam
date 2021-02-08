import React from "react";
import "./Cards.css";
const Cards = () => {
  return (
    <div className="container">
      <div className="row">
        <h4 className="display-5">Creating opportunities for everyone</h4>
      </div>
      <div className="row">
        <p className="lead mt-3">
          We are the first platform enabling increased benefits for farmers,
          retailers, and consumers.
        </p>
      </div>
      <div className="row">
        <div className="col-3">
          <div className="card cards">
            <img className="farmer" src="/images/farmer.svg" alt="" />
            <h5 className="mt-2 font-weight-bold">Benefits for farmers</h5>
          </div>
        </div>
        <div className="col-3">
          <div className="card cards">
            <h5 className="mt-2">Convenience for retailers</h5>
            <p>Competetive Pricing</p>
            <p>Doorstep delivery</p>
            <p>High quality graded produce</p>
            <p>Transparent weighing</p>
          </div>
        </div>
        <div className="col-3">
          <div className="card cards">
            <h5 className="mt-2">Savings for consumers</h5>
            <p>Competetive Pricing</p>
            <p>Doorstep delivery</p>
            <p>High quality graded produce</p>
            <p>Transparent weighing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
