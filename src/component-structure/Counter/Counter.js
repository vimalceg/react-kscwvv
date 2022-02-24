import React from 'react';
import { counterProptypes, counterDefaultProps } from './propTypes';

import useCounter from './useCounter';

let CounterSkeleton = React.memo(
  ({ count, onIncrement, onDecrement, onSetCounter }) => {
    return (
      <div>
        <span onClick={onDecrement}>Decrement</span> - <span>{count}</span> -{' '}
        <span onClick={onIncrement}>Increment</span>
        <span onClick={() => onSetCounter(10)}>Set Counter to 10</span>
      </div>
    );
  }
);

export default function Counter() {
  let { count, handleDecrement, handleIncrement, handleSetCounter } =
    useCounter();
  return (
    <CounterSkeleton
      count={count}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSetCounter={handleSetCounter}
    />
  );
}
Counter.propTypes = counterProptypes;
Counter.defaultProps = counterDefaultProps;
