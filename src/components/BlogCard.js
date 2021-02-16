import React from 'react'
import "./BlogCard.css"
const BlogCard = ({ title, desc, image }) => {
    const blogTitle = title ? title : "Title here";
    const blogDesc = desc ? desc : "Description of blog";
    const blogImage = image
      ? image
      : `https://images.pexels.com/photos/414781/pexels-photo-414781.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`;
    return (
      <div className="card blogcard">
        <img src={blogImage} className="card-img-top h-100"  alt="..." />
        <div className="card-body">
          <h5 className="card-title">{blogTitle}</h5>
          <p className="card-text">{blogDesc}</p>
          <p className="mt-3">
            <a href="#" className="btn btn-outline-success">
              Read more
            </a>
          </p>
        </div>
      </div>
    );
  };
  
  export default BlogCard;
  
