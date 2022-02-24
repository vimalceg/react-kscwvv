import { useReducer } from 'react';
import reducer from './reducer';
import { increment, decrement, setCounter } from './actions';
import bindActions from '../bindActions';

export default function useCounter(props) {
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
