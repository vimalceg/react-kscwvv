/* traditional way coding */
import React, { useState, useEffect } from 'react';

let AsyncTicket = (props) => {
  let [isLoading, setLoading] = useState(true);
  let [ref, setComponent] = useState({});
  let Component = ref.component;
  useEffect(() => {
    import('./container/TicketOld').then((res) => {
      setTimeout(() => {
        setLoading(false);
        setComponent({ component: res.default });
      }, 2000);
    });
  }, []);
  console.log('Component', isLoading, Component);
  if (isLoading || !Component) {
    return <div>JS loading...</div>;
  }
  return <Component />;
};

export default function App() {
  return <AsyncTicket />;
}
