import React, { useState } from "react";
import { cardBack } from "../utils/CardPictures/importedCatCards";

export const Card = ({ card }) => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(!clicked);
  };

  return (
    <div className="imageContainer">
      <img
        className="cardImages"
        src={clicked ? card : cardBack.image}
        alt=""
        onClick={clickHandler}
      />
    </div>
  );
};
