import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  return (
    <div style={{ "margin-top": "10%" }}>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-4 mb-3">
            <BlogCard
              title="Designing Tech Infrastructure with OpenSource Technologies"
              desc="OpenSource Projects have been a backbone for millions of developers and hundreds of companies around the globe. We will pick some of the popular projects today to create a robust pipeline."
              image="/images/pexels-adonyi-gábor-1414651.jpg"
            />
          </div>
          <div className="col-4 mb-3">
            <BlogCard
              title="Walmart and Flipkart Group make additional investment in Ninjacart."
              desc="Walmart and the Flipkart Group today announced a fresh round of investment in Ninjacart, the innovative startup disrupting India’s fresh produce market with its made-for-India."
              image="/images/pexels-wendy-wei-1656663.jpg"
            />
          </div>
          <div className="col-4 mb-3">
            <BlogCard
              title="Coding at the Core of Ninjacart: A Developer’s Journey of Growth"
              desc="The on-ground reality is always different in any company and in order to write efficient code, you must always be aware of the conditions of the people you write the code for."
              image="/images/pexels-skitterphoto-9301.jpg"
            />
          </div>
          <div className="col-4 mb-3">
            <BlogCard
              title="Designing Tech Infrastructure with OpenSource Technologies"
              desc="OpenSource Projects have been a backbone for millions of developers and hundreds of companies around the globe. We will pick some of the popular projects today to create a robust pipeline."
              image="/images/pexels-wendy-wei-1656663.jpg"
            />
          </div>
          <div className="col-4 mb-3">
            <BlogCard
              title="Designing Tech Infrastructure with OpenSource Technologies"
              desc="OpenSource Projects have been a backbone for millions of developers and hundreds of companies around the globe. We will pick some of the popular projects today to create a robust pipeline."
              image="/images/pexels-skitterphoto-9301.jpg"
            />
          </div>
          <div className="col-4 mb-3">
            <BlogCard
              title="Designing Tech Infrastructure with OpenSource Technologies"
              desc="OpenSource Projects have been a backbone for millions of developers and hundreds of companies around the globe. We will pick some of the popular projects today to create a robust pipeline."
              image="/images/pexels-adonyi-gábor-1414651.jpg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
