import React from "react";
import "./style.css";
import backpick from "../../image/backpick.jpeg";
import classnames from "classnames";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };
  return (
    <div
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive,
      })}
      onClick={handleClick}
    >
      <div className="card-face card-font-face">
        <img src={backpick} alt="backpick" className="img" />
      </div>
      <div className="card-face card-back-face">
        <img src={card.image} alt="frontpic" className="img" />
      </div>
    </div>
  );
};
export default Card;
