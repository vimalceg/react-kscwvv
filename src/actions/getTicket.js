import ticket from '../mockData/ticket';
export default function getTicket() {
  return new Promise((res, rej) => {
    setTimeout(() => res(ticket), 2000);
  });
}
