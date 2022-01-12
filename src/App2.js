/* Recall Error handling */
/* DON"T USE try catch - imperative */
import React from 'react';

function Div({ text }) {
  try {
    return <div>{text.toUpperCase()}</div>;
  } catch (e) {
    return <div>Error</div>;
  }
}

export default function App() {
  return (
    <React.Fragment>
      Functional
      <Div text={null} />
      <Div text={'test'} />
    </React.Fragment>
  );
}
