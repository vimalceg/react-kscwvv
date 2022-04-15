import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
// import { compose, fromUnary, SomeError, Success } from 'baccano';
import App from './App16';
// import App from './event-customization/example2';
// import { Counter as App } from './component-structure/Counter';
// import App from './statereducerpattern';

ReactDOM.render(<App />, document.getElementById('root'));

// const divideBy = (n) => (x) => {
//   if (n === 0) {
//     return SomeError(DIVISON_BY_ZERO, 'Cannot divide by zero.');
//   } else {
//     return Success(n / x);
//   }
// };
// const plusOne = (x) => {
//   return Success(x + 1);
// };
// let dpone = compose(divideBy(10), plusOne);
// console.log(dpone(5).value());
