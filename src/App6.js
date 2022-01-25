import React, { useState } from 'react';

function useCounter(pCount) {
  let [count, setCount] = useState(pCount);
  function handleIncrement() {
    setCount(count + 1);
  }
  return { count, handleIncrement };
}
function Counter({ count, handleIncrement }) {
  console.log('Render Counter');
  return (
    <div>
      <span>Counter : {count}</span>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
function Switch({ state, toggle }) {
  console.log('Render Switch');
  return <div onClick={toggle}>{state ? 'ON' : 'OFF'}</div>;
}

function CounterController({ count: propsCount = 0 }) {
  let { count, handleIncrement } = useCounter(propsCount);
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
