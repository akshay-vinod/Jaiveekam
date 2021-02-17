import React, { useState } from "react";
import "./AboutCard.css";

const AboutCard = () => {
  const [bgColor, SetbgColor] = useState(false);
  return (
    <div className="about-card ">
      <div
        className={bgColor ? "card about-card1 cardState" : "card about-card1"}
      >
        <div className={bgColor ? "circle1 circleState" : "circle1"}>
          <i className="fas fa-lightbulb fa-2x" />
        </div>

        <div className="card-body">
          <p class="card-title about-card-title">The problem</p>
          <div className="align-details">
            <i class="far fa-dot-circle"></i>
            <p className="card-text">
              Farmers experience price risk, information asymmetry about demand,
              distribution inefficiency, and receive late payments.
            </p>
          </div>
          <div className="align-details">
            <i class="far fa-dot-circle"></i>
            <p>
              Retailers face problems like higher costs, low quality and
              unhygienic produce, high price volatility, and the everyday hassle
              of going to the market.
            </p>
          </div>
          <div className="align-details">
            <i class="far fa-dot-circle"></i>
            <p>
              The traditional Supply Chain is highly inefficient, unorganized,
              and has a high rate of food wastage.
            </p>
          </div>
        </div>
      </div>
      <div
        onMouseEnter={() => SetbgColor(true)}
        onMouseLeave={() => SetbgColor(false)}
        className="card about-card2"
      >
        <div className="circle2">
          <i className="fas fa-truck fa-2x" />
        </div>

        <div className="card-body">
          <p class="card-title about-card-title">Our Solution</p>
          <div className="align-details">
            <i class="far fa-dot-circle"></i>
            <p className="card-text">
              We eliminated intermediaries by taking control of the Supply Chain
              by using technology and analytics.
            </p>
          </div>
          <div className="align-details">
            <i class="far fa-dot-circle"></i>
            <p>
              We built reliable, cost-effective, and high-speed logistics and
              infrastructure to solve for inefficiencies in the Supply Chain.
            </p>
          </div>
          <div className="align-details">
            <i class="far fa-dot-circle"></i>
            <p>
              On one end, farmers get better prices and consistent demand, and
              on the other end, retailers receive fresh produce.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
