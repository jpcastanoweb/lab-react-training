import React, { useState } from 'react';
import './style.css';
import profiles from './../../data/berlin.json';
import FaceBookCard from '../FaceBookCard';

export default function FaceBook() {
  const countries = ['All'];

  profiles.map((profile) => {
    if (!countries.includes(profile.country))
      return countries.push(profile.country);
    return null;
  });

  const [currentCountry, setCurrentCountry] = useState('All');

  const handleClick = (e) => {
    e.preventDefault();

    setCurrentCountry(e.target.value);
  };
  return (
    <>
      <ul className="buttons">
        {countries.map((country, i) => {
          return (
            <button
              value={country}
              key={i}
              onClick={(e) => {
                handleClick(e);
              }}
              style={
                currentCountry === country
                  ? { backgroundColor: 'lightBlue' }
                  : {}
              }
            >
              {country}
            </button>
          );
        })}
      </ul>
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
              currentCountry={currentCountry}
            />
          );
        })}
      </ul>
    </>
  );
}
