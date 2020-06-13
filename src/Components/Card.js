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
    startCheckingAnswer,
    stopCheckingAnswer,
    isAnswerBeingChecked,
  } = useGameStore();

  const clickHandler = () => {
    // Starts game when a card is clicked
    if (isGameStarted === false) {
      startGame();
    }
    // Flips first card in click pair if it isn't already flipped
    if (
      isFirstCardClicked === false &&
      clicked === false &&
      correctAnswer === false &&
      isAnswerBeingChecked === false
    ) {
      setClicked(!clicked);
      setCurrentChoice(true);
      selectFirstCard(card.id);
    }
    // Clicks second card if a first card is already flipped
    else if (
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
    // Checks if two cards flipped match - doesn't flip back over
    if (
      firstCardId === secondCardId &&
      secondCardId !== null &&
      currentChoice === true
    ) {
      setCurrentChoice(false);
      setCorrectAnswer(true);
      resetSelectedCards();
      increaseCorrectCounter();
    }
    // Checks if two cards flipped don't match - flips back over in 0.5s
    else if (
      firstCardId !== secondCardId &&
      secondCardId !== null &&
      currentChoice === true
    ) {
      setCurrentChoice(false);
      resetSelectedCards();
      startCheckingAnswer();
      setTimeout(() => setClicked(!clicked), 400);
      setTimeout(() => stopCheckingAnswer(), 400);
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
