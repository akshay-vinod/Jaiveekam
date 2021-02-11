import React from "react";
import "./Front.css";
const Front = () => {
  return (
    <div>
      <div className="container front-container">
        <img src="/images/bg.svg" className="bgimg" />
        <div className="row">
          <div className="col-4 mt-5 ml-3">
            <h2>Revolutionizing the Fresh Produce Supply Chain</h2>
            <br />
            <p>
              Driven by cutting edge technology, we source fresh produce from
              farmers and sell to businesses, across India
            </p>
            <button className="btn btn-success">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Front;
