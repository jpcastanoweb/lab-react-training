import React, { useState } from 'react';
import './style.css';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [currentColor, setCurrentColor] = useState({
    index: 0,
    color: 'purple',
  });

  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const handleClick = (e) => {
    e.preventDefault();

    const newIndex = (currentColor.index + 1) % 6;
    setCurrentColor({
      index: newIndex,
      color: colors[newIndex],
    });
    setLikes(likes + 1);
  };

  return (
    <button
      className="like-btn"
      onClick={(e) => {
        handleClick(e);
      }}
      style={{ backgroundColor: currentColor.color }}
    >
      {likes} likes
    </button>
  );
}
