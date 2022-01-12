import React from 'react';
// import {Suspense} from 'react';
import './style.css';
import Suspense from './components/Suspense';
import Loading from './components/Loading';
import wrapPromise from './utils/wrapPromise';
import getTicket from './actions/getTicket';

let getTicketW = wrapPromise(getTicket);
function TicketContainer() {
  let ticket = getTicketW();
  console.log(ticket);
  return (
    <div>
      {ticket.id}-{ticket.subject}
    </div>
  );
}
export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Test />
    </Suspense>
  );
}
