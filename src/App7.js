import React, { useState, useCallback } from 'react';

function useCounter(pCount) {
  let [count, setCount] = useState(pCount);
  let handleIncrement = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return { count, handleIncrement };
}
let Counter = React.memo(({ count, handleIncrement }) => {
  console.log('Render Counter');
  return (
    <div>
      <span>Counter : {count}</span>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
});
let Switch = React.memo(({ state, toggle }) => {
  console.log('Render Switch');
  return <div onClick={toggle}>{state ? 'ON' : 'OFFq'}</div>;
});

function CounterController({ count: propsCount = 0 }) {
  // let { count, handleIncrement } = useCounter(propsCount);
  let [count, setCount] = useState(pCount);
  let handleIncrement = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
  let [state, setState] = useState(false);
  return (
    <>
      <Switch state={state} toggle={() => setState(!state)} />
      <Counter count={count} handleIncrement={handleIncrement} />
    </>
  );
}
export default function App() {
  return (
    <React.Fragment>
      <CounterController />
    </React.Fragment>
  );
}
