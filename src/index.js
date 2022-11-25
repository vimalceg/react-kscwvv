import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
// import { compose, fromUnary, SomeError, Success } from 'baccano';
// import App from './App16';
// import App from './event-customization/example2';
// import { Counter as App } from './component-structure/Counter';
// import App from './statereducerpattern';
// import MouseTracker from './renderprops/classbased/MouseTracker';
// import MouseTracker from './renderprops/functional/MouseTracker';
// ReactDOM.render(<MouseTracker />, document.getElementById('root'));

function entity(module) {
  return (state = {}, action) => {
    if (action.type === module + '_success') {
      return { ...state, [action.data.entity.id]: action.data.entity };
    }
    return state;
  };
}
const createModuleState = (obj) => {
  let moduleObj = obj;
  return (state = {}, action) => {
    let module = action?.data?.module;
    if (!moduleObj[module] && module) {
      moduleObj[module] = entity(module);
    }
    return combineReducers(moduleObj)(state, action);
  };
};

let defaultModule = {
  ticket: entity('ticket'),
  contact: entity('contact'),
};
let reducer = combineReducers({
  module: createModuleState(defaultModule),
});
var store = createStore(reducer);
console.log('store', store);
store.subscribe(() => {
  console.log(store.getState());
});
console.log('test');

store.dispatch({ type: 'test' });
store.dispatch({
  type: 'cm1_success',
  data: { module: 'cm1', entity: { id: 1, name: 'vimal' } },
});
store.dispatch({
  type: 'ticket_success',
  data: { module: 'cm1', entity: { id: 2, name: 'vimal1' } },
});

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
