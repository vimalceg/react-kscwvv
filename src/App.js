import React from 'react';
import './style.css';


function wrapPromise(promise) {
  let status = 'pending';
  let result;
  let suspender = promise.then(
    (r) => {
      status = 'success';
      result = r;
    },
    (e) => {
      status = 'error';
      result = e;
    }
  );
  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    },
  };
}
function api() {
  return new Promise((res, rej) => {
    setTimeout(() => res(1), 5000);
  });
}
let apiW = wrapPromise(api());
function Test() {
  let a = apiW.read();
  return <div>{a}</div>;
}
export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Test />
    </Suspense>
  );
}
