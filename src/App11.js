import React, { useRef, useEffect } from 'react';

const Leaf = React.forwardRef((props, ref) => {
  return <div ref={ref}>Testing</div>;
});

const SubFolder = React.forwardRef((props, ref) => {
  return <Leaf ref={ref} />;
});

class ClassSubFolder extends React.Component {
  constructor(props) {
    super(props);
    this.method = this.method.bind(this);
  }
  method() {
    console.log(this.props);
  }
  render() {
    return <div>testing</div>;
  }
}

function Folder() {
  let ref = useRef();
  useEffect(() => {
    console.log(ref);
  }, []);
  return <SubFolder ref={ref} />;
}
function Folder1() {
  let ref = useRef();
  useEffect(() => {
    console.log(ref);
  }, []);
  return <ClassSubFolder ref={ref} />;
}

export default function App() {
  return <Folder />;
}
