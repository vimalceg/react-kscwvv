export default function getTicket() {
  return new Promise((res, rej) => {
    setTimeout(() => res(1), 5000);
  });
}
