import React from 'react';
import './style.css';

export default function index(props) {
  // const toDateString(date) {

  // }

  return (
    <div className="idCardContainer">
      <img className="idCardImage" src={props.picture} alt="face img"></img>
      <div>
        <p className="cardImageP">
          <b>First name:</b> {props.firstName}
        </p>
        <p className="cardImageP">
          <b>Last name:</b> {props.lastName}
        </p>
        <p className="cardImageP">
          <b>Gender:</b> {props.gender}
        </p>
        <p className="cardImageP">
          <b>Height:</b> {props.height}
        </p>
        <p className="cardImageP">
          <b>Birth:</b> {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
}
