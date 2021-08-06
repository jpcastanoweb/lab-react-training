import React, { useState } from 'react';
import './style.css';

export default function FaceBookCard(props) {
  const [visible, setVisible] = useState(true);

  const flipVisible = (e) => {
    e.preventDefault();
    const opp = !visible;
    setVisible(opp);
  };
  return (
    <div
      className="box fb-box"
      style={
        props.country === props.currentCountry
          ? { backgroundColor: 'lightblue' }
          : {}
      }
    >
      <button
        className="profile-img"
        onClick={(e) => {
          flipVisible(e);
        }}
      >
        <img src={props.img} alt="profile" />
      </button>
      {visible ? (
        <div>
          <p>
            <b>First name: </b>
            {props.firstName}
          </p>
          <p>
            <b>Last name: </b>
            {props.lastName}
          </p>
          <p>
            <b>Country: </b>
            {props.country}
          </p>
          <p>
            <b>Type: </b>
            {props.isStudent ? 'Student' : 'Teacher'}
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
