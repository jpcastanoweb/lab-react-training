import React from 'react';
import './style.css';

export default function NumbersTable(props) {
  const arr = [];

  for (let i = 0; i < props.limit; i++) {
    arr.push(i + 1);
  }

  return (
    <ul className="num-list">
      {arr.map((num, i) => {
        return num % 2 === 0 ? (
          <li key={i} className="num-box" style={{ backgroundColor: 'red' }}>
            {num}
          </li>
        ) : (
          <li key={i} className="num-box">
            {num}
          </li>
        );
      })}
    </ul>
  );
}
