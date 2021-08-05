import React, { useState } from 'react';
import SingleColorPicker from './../SingleColorPicker';
import './style.css';
export default function RGBColorPicker() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const handleRedChange = (event) => {
    event.preventDefault();

    setRed(event.target.value);
  };

  const handleGreenChange = (event) => {
    event.preventDefault();
    setGreen(event.target.value);
  };

  const handleBlueChange = (event) => {
    event.preventDefault();
    setBlue(event.target.value);
  };

  return (
    <div>
      <div className="color-row">
        <div
          className="color-block"
          style={{ backgroundColor: `rgb(${red},0,0)` }}
        ></div>
        R: <SingleColorPicker val={red} handleChange={handleRedChange} />
      </div>
      <div className="color-row">
        <div
          className="color-block"
          style={{ backgroundColor: `rgb(0,${green},0)` }}
        ></div>
        G: <SingleColorPicker val={green} handleChange={handleGreenChange} />
      </div>
      <div className="color-row">
        <div
          className="color-block"
          style={{ backgroundColor: `rgb(0,0,${blue})` }}
        ></div>
        B: <SingleColorPicker val={blue} handleChange={handleBlueChange} />
      </div>
      <div className="color-row">
        <div
          className="color-block"
          style={{ backgroundColor: `rgb(${red},${green},${blue})` }}
        ></div>
        rfb({red},{green},{blue})
      </div>
    </div>
  );
}
