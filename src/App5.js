import React, { useState } from 'react';
export default function Counter({ proCount }) {
  let [count, setCount] = useState(0);
  if (proCount != count) {
    setCount(proCount);
  }
  return <div>{count}</div>;
}
