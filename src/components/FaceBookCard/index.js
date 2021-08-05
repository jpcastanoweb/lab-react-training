import React, { Profiler } from 'react';
import './style.css';

export default function FaceBookCard(props) {
  return (
    <div className="box fb-box">
      <img src={props.img} alt="profile" />
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
    </div>
  );
}
