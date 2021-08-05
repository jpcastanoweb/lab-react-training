import React from 'react';

export default function SingleColorPicker(props) {
  return (
    <input
      type="number"
      min={0}
      max={255}
      value={props.val}
      onChange={(e) => {
        props.handleChange(e);
      }}
      required
    ></input>
  );
}
