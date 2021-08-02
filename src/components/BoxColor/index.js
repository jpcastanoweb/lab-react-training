import React from 'react';

export default function index(props) {
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  const divStyle = {
    backgroundColor: 'rgb(' + props.r + ', ' + props.g + ', ' + props.b + ')',
  };
  return (
    <div className="BoxColor box" style={divStyle}>
      rgb({props.r},{props.g},{props.b})
      <br />
      {rgbToHex(props.r, props.g, props.b)}
    </div>
  );
}
