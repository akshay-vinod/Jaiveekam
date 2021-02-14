import React from "react";
import "./Front.css";
const Front = () => {
  return (
    <div>
      <div className="container front-container">
        <img src="/images/bg.svg" className="bgimg" />
        <div className="row">
          <div className="col-4 title">
            <h2>Revolutionizing Raw Land Development </h2>
            <br />
            <p>
              Using technology and capitalising govt and non-govt resources to
              develop raw lands to lucarative profitable and sustainable income
              for the future
            </p>
            <button className="btn btn-success mt-2">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Front;
