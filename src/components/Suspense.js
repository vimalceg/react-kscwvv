import React from 'react';

export default class Suspense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
    };
  }
  static getDerivedStateFromError(err) {
    return {
      isError: true,
    };
  }
  componentDidMount() {}
  componentDidCatch() {
    setTimeout(() => {
      this.setState({ isError: false });
    }, 1000);
  }
  render() {
    if (this.state.isError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
