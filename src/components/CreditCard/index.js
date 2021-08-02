import React from 'react';
import './style.css';

export default function index(props) {
  const ccDivStyle = {
    backgroundColor: props.bgColor,
  };

  const ccNumberStyle = {
    color: props.color,
  };
  const getCardImg = (type) => {
    console.log('Type: ', type);
    console.log(type === 'Visa');
    if (type === 'Visa') {
      return './../img/visa.png';
    } else if (type === 'Master Card') {
      return './../img/master-card.svg';
    }
  };
  const monthToTwo = (month) => {
    return month < 10 ? '0' + month : month;
  };

  return (
    <div className="creditCard" style={ccDivStyle}>
      <div className="creditCardLogo">
        <img src={getCardImg(props.type)} alt="ccLogo"></img>
      </div>
      <div className="creditCardNumber" style={ccNumberStyle}>
        <h2>•••• •••• •••• {props.number.slice(-4)}</h2>
      </div>
      <div className="ccExpires" style={ccNumberStyle}>
        <span>
          Expires {monthToTwo(props.expirationMonth)}/
          {props.expirationYear.toString().slice(-2)}
        </span>
        <span className="bankName">{props.bank}</span>
      </div>
      <div className="name" style={ccNumberStyle}>
        {props.owner}
      </div>
    </div>
  );
}
