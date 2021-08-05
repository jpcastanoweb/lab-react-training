import React from 'react';
import './style.css';
import profiles from './../../data/berlin.json';
import FaceBookCard from '../FaceBookCard';

export default function FaceBook() {
  return (
    <ul className="facebook">
      {profiles.map((profile, i) => {
        return (
          <FaceBookCard
            key={i}
            firstName={profile.firstName}
            lastName={profile.lastName}
            country={profile.country}
            img={profile.img}
            isStudent={profile.isStudent}
          />
        );
      })}
    </ul>
  );
}
