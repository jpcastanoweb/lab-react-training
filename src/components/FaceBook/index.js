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
  const [profilesList, setProfilesList] = useState(profiles);
  const [searchString, setSearchString] = useState('');

  const handleClick = (e) => {
    e.preventDefault();

    setCurrentCountry(e.target.value);
  };

  const sortByFirstName = (e) => {
    e.preventDefault();

    const sortedArr = [...profilesList].sort((a, b) => {
      return a.firstName.localeCompare(b.firstName);
    });
    setProfilesList(sortedArr);
  };

  const sortByLastName = (e) => {
    e.preventDefault();

    const sortedArr = [...profilesList].sort((a, b) => {
      return a.lastName.localeCompare(b.lastName);
    });
    setProfilesList(sortedArr);
  };

  const sortByCountry = (e) => {
    e.preventDefault();

    const sortedArr = [...profilesList].sort((a, b) => {
      return a.country.localeCompare(b.country);
    });
    setProfilesList(sortedArr);
  };

  const sortByType = (e) => {
    e.preventDefault();

    const sortedArr = [...profilesList].sort((a, b) => {
      return a.isStudent - b.isStudent;
    });
    setProfilesList(sortedArr);
  };

  return (
    <>
      <p style={{ marginBottom: '10px' }}>Search:</p>
      <input
        style={{ width: '500px' }}
        value={searchString}
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
      ></input>
      <hr />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        Sort by:
        <button
          style={{ margin: '0 5px' }}
          onClick={(e) => {
            sortByFirstName(e);
          }}
        >
          First Name
        </button>
        <button
          style={{ margin: '0 5px' }}
          onClick={(e) => {
            sortByLastName(e);
          }}
        >
          Last Name
        </button>
        <button
          style={{ margin: '0 5px' }}
          onClick={(e) => {
            sortByCountry(e);
          }}
        >
          Country
        </button>
        <button
          style={{ margin: '0 5px' }}
          onClick={(e) => {
            sortByType(e);
          }}
        >
          Type
        </button>
      </div>
      <hr />
      <p>Highlight:</p>
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
        {profilesList
          .filter((p) => {
            return (
              p.firstName.includes(searchString) ||
              p.lastName.includes(searchString) ||
              p.country.includes(searchString)
            );
          })
          .map((profile, i) => {
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
