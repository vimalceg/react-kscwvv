import React from 'react';
import './style.css';
import Suspense from './components/Suspense';
import Loading from './components/Loading';
import wrapPromise from './utils/wrapPromise';
function api() {
  return new Promise((res, rej) => {
    setTimeout(() => res(1), 5000);
  });
}
let apiW = wrapPromise(api);
function Test() {
  let a = apiW();
  return <div>{a}</div>;
}
export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Test />
    </Suspense>
  );
}
