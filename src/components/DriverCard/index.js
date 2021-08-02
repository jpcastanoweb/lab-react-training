import React from 'react';
import Rating from './../Rating';
import './style.css';

export default function index(props) {
  return (
    <div className="driverCard">
      <div className="driverImg">
        <img src={props.img} alt="driver img"></img>
      </div>
      <div className="textRight">
        <h2>{props.name}</h2>
        <Rating>{props.rating}</Rating>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}
