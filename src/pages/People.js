import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import PeopleCard from "../components/PeopleCard";
import PeopleFront from "../components/PeopleFront";
const People = () => {
  return (
    <div>
      <Nav />
      <PeopleFront />
      <div className="container">
        <div
          className="row"
          style={{
            "margin-left": "11%",
            "margin-right": "11%",
          }}
        >
          <div className="col-12 col-sm-6 col-md-4 col-lg-4">
            <PeopleCard
              name="Michele Miller"
              post="Sourcing"
              image="https://picsum.photos/130/130?image=1027"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4">
            <PeopleCard
              name="Patricia Knott"
              post="Category"
              image="https://picsum.photos/130/130?image=839"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4">
            <PeopleCard
              name="Justin Ramos"
              post="Human Resources"
              image="https://picsum.photos/130/130?image=856"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4">
            <PeopleCard
              name="Mary Huntley"
              post="Analytics"
              image="https://picsum.photos/130/130?image=836"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4">
            <PeopleCard
              name="Justin Ramos"
              post="Human Resources"
              image="https://picsum.photos/130/130?image=856"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4">
            <PeopleCard
              name="Patricia Knott"
              post="Category"
              image="https://picsum.photos/130/130?image=839"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default People;
