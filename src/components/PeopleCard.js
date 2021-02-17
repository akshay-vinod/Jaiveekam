import React from "react";
import "./PeopleCard.css";
const PeopleCard = ({ name, post, image }) => {
  const peopleName = name ? name : "Full name";
  const peoplePost = post ? post : "Post of person ";
  const peopleImage = image
    ? image
    : `https://images.pexels.com/photos/414781/pexels-photo-414781.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`;
  return (
    <div className="peoplecard">
      <div className="people-picture">
        <img
          className="img-fluid"
          src={peopleImage}
        />
      </div>
      <div className="team-content">
        <h3 className="name">{peopleName}</h3>
        <h3 className="title">{peoplePost}</h3>
      </div>
    </div>
  );
};

export default PeopleCard;
