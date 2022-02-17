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
  let { spanProps = {}, buttonProps = {} } = tagAttributeProps;
  console.log('vimal', spanProps);
  return (
    <div>
      <span {...spanProps}>Counter : {count}</span>
      <button onClick={handleIncrement} {...buttonProps}>
        Increment
      </button>
    </div>
  );
});

let CounterController = React.forwardRef(
  ({ count: propsCount = 0, counterTagAttributeProps }, ref) => {
    let { count, handleIncrement } = useCounter({ count: propsCount }, ref);

    return (
      <>
        <Counter
          count={count}
          handleIncrement={handleIncrement}
          tagAttributeProps={counterTagAttributeProps}
        />
      </>
    );
  }
);
export default function App() {
  let ref1 = useRef();
  let ref2 = useRef();
  function handleButtonMouseLeave() {
    ref1.current && ref1.current.handleIncrement();
  }
  return (
    <React.Fragment>
      <CounterController
        ref={ref1}
        counterTagAttributeProps={{
          buttonProps: {
            onMouseLeave: handleButtonMouseLeave,
            onClick: () => {},
          },
        }}
      />
      <CounterController ref={ref2} />
    </React.Fragment>
  );
}
