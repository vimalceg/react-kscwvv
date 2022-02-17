import React, {
  useState,
  useCallback,
  useRef,
  useImperativeHandle,
} from 'react';

function useCounter({ count: pCount }, ref) {
  let [count, setCount] = useState(pCount);
  let handleIncrement = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
  useImperativeHandle(ref, () => ({
    handleIncrement: handleIncrement,
  }));
  return { count, handleIncrement };
}
let Counter = React.memo(({ count, handleIncrement, tagAttributeProps }) => {
  return (
    <div>
      <span {...tagAttributeProps.spanProps}>Counter : {count}</span>
      <button onClick={handleIncrement} {...tagAttributeProps.buttonProps}>
        Increment
      </button>
    </div>
  );
});

let CounterController = React.forwardRef(({ count: propsCount = 0 }, ref) => {
  let { count, handleIncrement } = useCounter({ count: propsCount }, ref);

  return (
    <>
      <Counter
        count={count}
        handleIncrement={handleIncrement}
        tagAttributeProps={{
          buttonProps: {
            onMouseLeave: handleIncrement,
            onClick: () => {},
          },
          spanProps: {
            onClick: () => alert('ok'),
          },
        }}
      />
    </>
  );
});
export default function App() {
  let ref1 = useRef();
  let ref2 = useRef();
  return (
    <React.Fragment>
      <CounterController ref={ref1} />
      <CounterController ref={ref2} />
    </React.Fragment>
  );
}
