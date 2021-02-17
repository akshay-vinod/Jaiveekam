import React from "react";
import "./Road.css";
const Road = () => {
  return (
    <div className="road">
      <div>
        <img src="/images/road-bg.svg" />
      </div>
      <div className="road-content">
        <p className="road-content-h">The Road Ahead</p>
        <p className="road-content-para">
          Our vision is to build India's most efficient and largest Supply Chain
          platform and improve the lives of producers, businesses, and consumers
          in a meaningful manner.
        </p>
        <p className="road-content-para">
          We are focused on making the Ninjacart innovation more accessible to
          the most fragmented parts of society. We intend to leverage our
          strengths and resources to innovate for new product categories and
          customer segments while solving complex supply chain problems.
        </p>
      </div>
    </div>
  );
};

export default Road;
