import React from 'react';

export default function index(props) {
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  return (
    <div className="box">
      Random value between {props.min} and {props.max} ={'> '}
      {getRandomNumber(props.min, props.max)}
    </div>
  );
}
