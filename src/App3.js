/* traditional way coding */
import React from 'react';

let async = () => {
  function Async(props) {
    let [isLoading, setLoading] = useState(true);
    let [Component, setComponent] = useState(null);
    useEffect(() => {
      import('./container/Ticket').then((res) => {
        setLoading(false);
        console.log(res);
        setComponent(res);
      });
    }, []);
    if (isLoading) return <div>JS loading...</div>;
    else return <Component {...props} />;
  }
};
