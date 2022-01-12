import React from 'react';
import { Suspense } from 'react';
import './style.css';
// import Suspense from './components/Suspense';
import Loading from './components/Loading';
import Ticket from './container/Ticket';
export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Ticket />
    </Suspense>
  );
}
