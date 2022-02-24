import React, { useReducer, useState, useCallback } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'setcounter':
      return action.data;
  }
  return state;
}

function increment() {
  return { type: 'increment' };
}
function decrement() {
  return { type: 'decrement' };
}
function setCounter(data) {
  return { type: 'setcounter', data };
}
let Counter = React.memo(
  ({ count, onIncrement, onDecrement, onSetCounter }) => {
    console.log('Counter render...');
    return (
      <div>
        <span onClick={onDecrement}>Decrement</span> - <span>{count}</span> -{' '}
        <span onClick={onIncrement}>Increment</span>
        <span onClick={() => onSetCounter(10, 20)}>Set Counter to 10</span>
      </div>
    );
  }
);

function bindActions(obj, dispatch) {
  return Object.keys(obj).reduce((res, key) => {
    res[key] = useCallback(
      (...args) => dispatch(obj[key].apply(null, args)),
      []
    );
    return res;
  }, {});
}
function useCounter(props) {
  let [state, dispatch] = useReducer(reducer, 0);

  // let handleIncrement = useCallback(() => {
  //   dispatch(increment());
  // }, []);
  // let handleDecrement = useCallback(() => {
  //   dispatch(decrement());
  // }, []);
  // let handleSetCounter = useCallback(
  //   (...args) => dispatch(setCounter.apply(null, args)),
  //   []
  // );
  let {
    increment: handleIncrement,
    decrement: handleDecrement,
    setCounter: handleSetCounter,
  } = bindActions(
    {
      increment,
      decrement,
      setCounter,
    },
    dispatch
  );
  return { count: state, handleIncrement, handleDecrement, handleSetCounter };
}

export default function () {
  let { count, handleDecrement, handleIncrement, handleSetCounter } =
    useCounter();
  let [data, setData] = useState(0);
  return (
    <React.Fragment>
      <div
        onClick={() => {
          setData(data + 1);
        }}
      >
        Other Render - {data}
      </div>
      <Counter
        count={count}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onSetCounter={handleSetCounter}
      />
    </React.Fragment>
  );
}
