import React from 'react';
import useMouseTracker from './useMouseTracker';

export default function Mouse({ render }) {
  let { mousePosition, handleMouseMove } = useMouseTracker();
  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      {render(mousePosition)}
    </div>
  );
}
