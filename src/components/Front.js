import React from "react";

const Front = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4 mt-5 ml-3">
            <h2>Revolutionizing the Fresh Produce Supply Chain</h2>
            <br />
            <display-3>
              Driven by cutting edge technology, we source fresh produce from
              farmers and sell to businesses, across India
            </display-3>
            <br />
            <br />
            <button className="btn btn-success">Learn more</button>
            <div>
              <img
                className="environment"
                src="/images/undraw_environment_iaus.svg"
              />
            </div>
          </div>

          <div className="col-8">
            <img
              className="mobileapps"
              src="/images/undraw_mobile_apps_spmp.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Front;
