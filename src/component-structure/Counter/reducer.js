export default function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'setcounter':
      return action.data;
  }
  return state;
}
