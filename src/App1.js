/* Recall Error handling */
import React from 'react';

class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static getDerivedStateFromError(e) {
    return { isError: true };
  }
  render() {
    if (this.state.isError) {
      return <div>Error</div>;
    }
    return this.props.children;
  }
}

function Div({ text }) {
  return <div>{text.toUpperCase()}</div>;
}

export default function App() {
  return (
    <React.Fragment>
      <Error>
        <Div text={null} />
      </Error>
      <Error>
        <Div text={'test'} />
      </Error>
    </React.Fragment>
  );
}

// Error based displayed in different hierarchy
export default function App() {
  return (
    
      <Error>
        <Div text={null} />
        <Div text={'test'} />
      </Error>
  );
}