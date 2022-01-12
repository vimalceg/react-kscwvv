/* traditional way coding */
import React, { useState, useEffect } from 'react';

let AsyncTicket = (props) => {
  let [isLoading, setLoading] = useState(true);
  let [Component, setComponent] = useState(null);

  useEffect(() => {
    import('./container/TicketOld').then((res) => {
      // console.log('res', res.default);
      setLoading(false);
      setComponent(res);
    });
  }, []);
  console.log('Component', isLoading, Component);
  if (isLoading || !Component) {
    return <div>JS loading...</div>;
  }
  return <div>test</div>;
};

export default function App() {
  return <AsyncTicket />;
}
