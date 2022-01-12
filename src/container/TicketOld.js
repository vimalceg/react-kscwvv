import React, { useEffect, useState } from 'react';
import getTicket from '../actions/getTicket';
export default function TicketOld() {
  let [isLoading, setLoading] = useState(true);
  let [ticket, setTicket] = useState({});
  useEffect(() => {
    getTicket().then((res) => {
      setLoading(false);
      setTicket(res);
    });
  }, []);
  if (isLoading) {
    return <div>Data fetching...</div>;
  }
  return (
    <div>
      {ticket.id}-{ticket.subject}
    </div>
  );
}
