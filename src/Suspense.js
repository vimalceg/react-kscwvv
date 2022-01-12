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
  componentDidMount() {
    console.log('mount...');
  }
  componentDidCatch() {
    console.log('catch...');
    setTimeout(() => {
      this.setState({ isError: false });
    }, 1000);
  }
  render() {
    console.log('Suspense', this.state.isError, this.props.fallback);
    if (this.state.isError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
