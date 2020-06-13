import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { cardBack } from "../utils/CardPictures/importedCatCards";
import { useGameStore } from "../Stores/hooks";

export const Card = observer(({ card }) => {
  const [clicked, setClicked] = useState(false);
  const [currentChoice, setCurrentChoice] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);

  const {
    isGameStarted,
    startGame,
    isFirstCardClicked,
    selectFirstCard,
    selectSecondCard,
    firstCardId,
    secondCardId,
    resetSelectedCards,
    increaseCorrectCounter,
  } = useGameStore();

  const clickHandler = () => {
    if (isGameStarted === false) {
      startGame();
    }
    if (
      isFirstCardClicked === false &&
      clicked === false &&
      correctAnswer === false
    ) {
      setClicked(!clicked);
      setCurrentChoice(true);
      selectFirstCard(card.id);
    } else if (
      isFirstCardClicked === true &&
      clicked === false &&
      correctAnswer === false
    ) {
      setClicked(!clicked);
      setCurrentChoice(true);
      selectSecondCard(card.id);
    }
  };
  useEffect(() => {
    if (
      firstCardId === secondCardId &&
      secondCardId !== null &&
      currentChoice === true
    ) {
      setCurrentChoice(false);
      setCorrectAnswer(true);
      resetSelectedCards();
      increaseCorrectCounter();
    } else if (
      firstCardId !== secondCardId &&
      secondCardId !== null &&
      currentChoice === true
    ) {
      setCurrentChoice(false);
      resetSelectedCards();
      setTimeout(() => setClicked(!clicked), 500);
    }
  });

  return (
    <div className="imageContainer">
      <img
        className="cardImages"
        src={clicked ? card.image : cardBack.image}
        alt=""
        onClick={clickHandler}
        draggable="false"
      />
    </div>
  );
});
