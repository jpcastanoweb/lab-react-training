import React, { useState } from 'react';
import './style.css';

export default function ClickablePicture(props) {
  const [glasses, setGlasses] = useState(false);
  const [image, setImage] = useState(props.img);

  const flip = (e) => {
    setGlasses(!glasses);
    if (glasses) {
      setImage(props.img);
    } else {
      setImage(props.imgClicked);
    }
  };

  return (
    <button
      className="clickable-picture"
      onClick={(e) => {
        flip(e);
      }}
    >
      <img src={image} alt="person"></img>
    </button>
  );
}
