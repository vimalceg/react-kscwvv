import React, { useState } from 'react';

function useCounter(pCount) {
  let [count, setCount] = useState(pCount);
  function handleIncrement() {
    setCount(count + 1);
  }
  return { count, handleIncrement };
}
function Counter({ count, handleIncrement }) {
  return (
    <div>
      <span>Counter : {count}</span>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

function CounterController({ count: propsCount = 0 }) {
  let { count, handleIncrement } = useCounter(propsCount);
  return <Counter count={count} handleIncrement={handleIncrement} />;
}
export default function App() {
  return (
    <React.Fragment>
      <Counter />
    </React.Fragment>
  );
}
