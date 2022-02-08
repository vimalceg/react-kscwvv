import React, { useState, useCallback } from 'react';

function useCounter({ count: pCount }) {
  let [count, setCount] = useState(pCount);
  let handleIncrement = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return { count, handleIncrement };
}
let Counter = React.memo(({ count, handleIncrement, buttonProps }) => {
  return (
    <div>
      <span>Counter : {count}</span>
      <button onClick={handleIncrement} {...buttonProps}>
        Increment
      </button>
    </div>
  );
});
let Switch = React.memo(({ state, toggle }) => {
  return <div onClick={toggle}>{state ? 'ON' : 'OFFq'}</div>;
});

function CounterController({ count: propsCount = 0 }) {
  // let { count, handleIncrement } = useCounter(propsCount);
  let [count, setCount] = useState(propsCount);
  let handleIncrement = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
  let [state, setState] = useState(false);
  return (
    <>
      <Switch state={state} toggle={() => setState(!state)} />
      <Counter
        count={count}
        handleIncrement={handleIncrement}
        buttonProps={{
          onMouseLeave: handleIncrement,
          onClick: () => {},
        }}
      />
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
