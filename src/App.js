import React from 'react';
import './style.css';
import Suspense from './components/Suspense';
import Loading from './components/Loading';
import wrapPromise from './utils/wrapPromise';
import getTicket from './actions/getTicket';

let getTicket = wrapPromise(getTicket);
function Test() {
  let a = getTicket();
  return <div>{a}</div>;
}
export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Test />
    </Suspense>
  );
}
