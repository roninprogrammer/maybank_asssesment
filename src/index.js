import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


console.log(
  `%c👋 Hello Maybank!`,
  'color: #FFD500; font-size: 24px; font-weight: bold; font-family: Roboto, sans-serif;'
);
console.log(
  `%cThis app was built with love, clean code, and coffee.`,
  'color: #000; font-size: 16px;'
);
console.log(
  `%cHire me 👉 roninprogrammer@gmail.com`,
  'color: #FFD500; font-weight: bold; font-size: 16px;'
);
window.hireMe = () =>
  alert(' Best decision you’ll make today. Let’s build the future together.');
