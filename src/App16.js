/* Recall Error handling */
/* DON"T USE try catch - imperative */
import React, { useState } from 'react';

let Text = React.memo(
  React.forwardRef((props, ref) => {
    console.log('render...');
    return <div ref={ref}>{props.children}</div>;
  })
);
export default function App() {
  let [count, setCount] = useState(0);
  let ref = React.useRef();
  React.useEffect(() => {
    console.log(ref.current);
  }, []);
  return (
    <React.Fragment>
      {count}
      <div
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </div>
      <Text ref={ref}>Vimal</Text>
    </React.Fragment>
  );
}
