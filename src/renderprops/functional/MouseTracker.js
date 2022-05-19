import React from 'react';
import Mouse from './Mouse';
import Cat from './Cat';

export default function MouseTracker() {
  return (
    <div>
      <h1>Move the mouse around!</h1>
      <Mouse render={(mouse) => <Cat mouse={mouse} />} />
    </div>
  );
}
