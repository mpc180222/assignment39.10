import React, { useState } from "react";
import backOfCard from "./back.png";
import useFlip from "./hooks/useFlip";
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  //***old code**
  // const [isFacingUp, setIsFacingUp] = useState(true);
  // const flipCard = () => {
  //   setIsFacingUp(isUp => !isUp);
  // };
//************** */

 //below is attempt at custom hook

 const [isFlipped, setIsFlipped] = useFlip();
 
  return (
    <img
      src={isFlipped ? front : back}
      alt="playing card"
      onClick={setIsFlipped}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
