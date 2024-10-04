import "../../Styles/Card.css";
import React from "react";

const Card = ({ data }) => {
  console.log(data)
  return (
    <div>
      {data &&
        data.map((res) => {
          return (
            <div className="featured-cards-div" key={res.id}>
              <div className="card-image-div">
                <img
                  src={res.image}
                  className="featured-card-image"
                  alt="Image"
                />
                <span>{res.off}</span>
              </div>
              <div className="card-details">
                <h1 className="featured-card-title">{res.title}</h1>
                <span>{res.price}</span>
                <span>{res.offPrice}</span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Card;
