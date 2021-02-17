import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Land from "../components/About/Land";
import Content from "../components/About/Content";
import AboutCard from "../components/About/AboutCard";
import Road from "../components/About/Road";
const Aboutus = () => {
  return (
    <div>
      <Nav />
      <Land />
      <Content />
      <AboutCard />
      <Road />
      <Footer />
    </div>
  );
};

export default Aboutus;
