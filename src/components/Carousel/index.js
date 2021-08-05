import React, { useState, useEffect } from 'react';

export default function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImgPath, setCurrentImgPath] = useState('');

  const handleLeftClick = (e) => {
    e.preventDefault();
    if (currentIndex === 0) setCurrentIndex(3);
    else setCurrentIndex(currentIndex - 1);

    // setCurrentImgPath(props.imgs[currentIndex]);

    console.log('New index: ', currentIndex);
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    if (currentIndex === 3) setCurrentIndex(0);
    else setCurrentIndex(currentIndex + 1);

    // setCurrentIndex(currentIndex + 1);
    // setCurrentImgPath(props.imgs[currentIndex]);

    console.log('New index: ', currentIndex);
  };

  useEffect(() => {
    setCurrentImgPath(props.imgs[currentIndex]);
  }, [currentIndex]);

  return (
    <>
      <button
        onClick={(e) => {
          handleLeftClick(e);
        }}
      >
        Left
      </button>
      <img src={currentImgPath} alt="person"></img>
      <button
        onClick={(e) => {
          handleRightClick(e);
        }}
      >
        Right
      </button>
    </>
  );
}
