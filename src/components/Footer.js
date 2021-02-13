import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="bg">
      <div className="container">
        <div className="row footer">
          <div className="col-4">
            <h4>Contact us</h4>
            <hr />
            <p>
              <i class="fa fa-phone fa-2x  fa-margin" aria-hidden="true"></i>
              +91 9232323232
            </p>
            <p>
              <i class="fa fa-envelope fa-2x fa-margin" aria-hidden="true"></i>
              johndoe@gmail.com
            </p>
            <p className="text-wrap">
              <i
                className="fa fa-map-marker fa-2x fa-margin"
                aria-hidden="true"
              ></i>
              Thrissur , Kerala, India <br />{" "}
              <span style={{ "padding-left": "50px" }}></span> zipcode
            </p>
          </div>
          <div className="col-3 connect">
            <h4>Connect with us</h4>
            <hr />
            <a
              href="#"
              className="fa fa-facebook-official fa-fw fa-2x fa-margin ml-5"
              aria-hidden="true"
            ></a>
            <a
              href="#"
              className="fa fa-linkedin-square fa-fw fa-2x fa-margin"
              aria-hidden="true"
            ></a>
            <a href="#" className="fab fa-instagram fa-fw fa-2x fa-margin"></a>
            <a
              href="#"
              className="fab fa-twitter-square fa-fw fa-2x fa-margin"
            ></a>
          </div>
          <div className="col-1"></div>
          <div className="col-4">
            <h4>Quick Links</h4>
            <hr />
            <div className="links">
              <p>
                <Link to="/aboutus">About Us</Link>
              </p>
              <p>
                <a href="#">Buy/Sell</a>
              </p>
              <p>
                <Link to="/people">People</Link>
              </p>
              <p>
                <Link to="/blog">Blog</Link>
              </p>
              <p>
                <a href="#">FAQ</a>
              </p>
            </div>
          </div>
        </div>
        <div className="row bottom">
          <hr />
          <div className="col-3"></div>
          <div className="col-6">
            <p>
              <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>{" "}
              | <a href="#">Refund Policy</a> |{" "}
              <a href="https://www.freepik.com/vectors/flower">
                Flower vector created by macrovector - www.freepik.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
