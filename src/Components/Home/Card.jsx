import "../../Styles/Home/HomeCard.css";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart, CiSearch } from "react-icons/ci";

const Card = ({ data }) => {
  return (
    <div className="featured-cards-div" key={data.id}>
      <div className="card-image-div">
        <img src={data.image} className="featured-card-image" alt="img" />
        <div className="card-icons">
          <span className="card-search-icon card-icon">
            <CiSearch />
          </span>
          <span className="card-heart-icon card-icon">
            <CiHeart />
          </span>
        </div>
        <span>{data.off}</span>
        <div className="add-to-card-btn">
          <h1>ADD TO CART</h1>
          <span className="add-to-card-icon">
            <FaShoppingCart />
          </span>
        </div>
      </div>
      <div className="card-details">
        <h1 className="featured-card-title">{data.title}</h1>
        <span className="original-price">{data.price}</span>
        <span className="off-price">{data.offPrice}</span>
      </div>
    </div>
  );
};

export default Card;
