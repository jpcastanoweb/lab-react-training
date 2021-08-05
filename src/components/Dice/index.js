import React, { useState } from 'react';
import './style.css';

const getRandomImagePath = () => {
  const randomNum = Math.floor(Math.random() * 6) + 1;

  return '/img/dice' + randomNum + '.png';
};

//credit: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function Dice() {
  const [currentImage, setCurrentImage] = useState(getRandomImagePath());

  const handleClick = async (e) => {
    setCurrentImage('/img/dice-empty.png');
    await sleep(1000);
    setCurrentImage(getRandomImagePath());
  };

  return (
    <button
      className="dice-btn"
      onClick={(e) => {
        handleClick(e);
      }}
    >
      <img src={currentImage} alt="dice" />
    </button>
  );
}
