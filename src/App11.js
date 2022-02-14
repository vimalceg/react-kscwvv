import React, { useRef } from 'react';

const Leaf = React.forwardRef((props, ref) => {
  return <div ref={ref} />;
});

function SubFolder() {
  return <Leaf />;
}

function Folder() {
  let ref = useRef();
  return <SubFolder ref={ref} />;
}

export default function App() {
  return <Folder />;
}
