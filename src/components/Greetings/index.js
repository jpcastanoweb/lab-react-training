import React from 'react';

export default function index(props) {
  console.log(props);
  const getGreeting = (lang) => {
    switch (lang) {
      case 'de':
        return 'Hallo';
      case 'en':
        return 'Hello';
      case 'es':
        return 'Hola';
      case 'fr':
        return 'Bonjour';
      default:
        return 'Hello';
    }
  };

  return (
    <div className="box">
      {getGreeting(props.lang)} {props.children}
    </div>
  );
}
