import React from 'react';
import wrapPromise from '../utils/wrapPromise';
import getTicket from '../actions/getTicket';

let getTicketW = wrapPromise(getTicket);
export default function TicketContainer() {
  let ticket = getTicketW();
  console.log(ticket);
  return (
    <div>
      {ticket.id}-{ticket.subject}
    </div>
  );
}
