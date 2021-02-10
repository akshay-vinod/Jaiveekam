import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footerStyle">
      <div>
        <img className="footerBg" src="/images/footerbg.svg" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h5 className="text-dark">Contact us</h5>
            <hr />
            <p>Phone number:</p>
            <p>Email id</p>
            <p className="text-wrap">
              Address in lines ahshashashsahshasahhsahshashas
              hashashsaswertyucucuaucuaucauusascmcmcmcmmc
            </p>
          </div>
          <div className="col-4">
            <h5>Connect with us</h5>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
