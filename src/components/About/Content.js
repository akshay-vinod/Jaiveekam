import React from "react";
import "./Content.css";
const Content = () => {
  return (
    <div className="abt-content">
      <div className="bg-content">
        <div className="about-content-h">
          <p>Green Acres and Tech</p>
        </div>
        <div className="about-content-para">
          <p>
            Jaiveekam is the first of its kind, focused on the developing raw
            lands with years of expertize and Technology to produce high yeild
            to make the land and lucarative investment.
          </p>

          {/*<p>
          We connect producers of food directly with retailers, restaurants, and
          service providers using in-house applications that drive end to end
          operations. Currently, our Supply Chain is equipped to move 1400
          tonnes of perishables from farms to businesses, every day, in less
          than 12 hours.
        </p>*/}
        </div>
      </div>
      <div className="content-image">
        <img src="/images/abt-content.svg" />
      </div>
    </div>
  );
};

export default Content;
