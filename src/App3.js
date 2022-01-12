/* traditional way coding */
import React, { useState, useEffect } from 'react';

let async = () => {
  return function Async(props) {
    let [isLoading, setLoading] = useState(true);
    let [Component, setComponent] = useState(null);
    useEffect(() => {
      import('./container/Ticket').then((res) => {
        setLoading(false);
        console.log('res', res);
        setComponent(res);
      });
    }, []);
    if (isLoading) {
      return <div>JS loading...</div>;
    } else {
      return <Component {...props} />;
    }
  };
};
let Ticket = async();
export default function App() {
  return <Ticket />;
}
