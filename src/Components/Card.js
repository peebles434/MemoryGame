import React from "react";

export const Card = ({ card }) => {
  return (
    <div className="imageContainer">
      <img className="cardImages" src={card} alt="" />
    </div>
  );
};
