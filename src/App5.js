import React, { useState } from 'react';
function Counter({ proCount }) {
  let [count, setCount] = useState(0);
  if (proCount != count) {
    setCount(proCount);
  }
  return <div>{count}</div>;
}

export default function App() {
  return (
    <React.Fragment>
      <Counter proCount={10} />
    </React.Fragment>
  );
}
