import React from 'react';
import './style.css';

export default function index(props) {
  const getRatingString = (rating) => {
    let ratingStr = '';
    for (let i = 0; i < Math.round(rating); i++) {
      ratingStr += '★';
    }
    for (let i = Math.round(rating); i < 5; i++) {
      ratingStr += '☆';
    }

    return ratingStr;
  };
  return <div className="rating">{getRatingString(props.children)}</div>;
}
