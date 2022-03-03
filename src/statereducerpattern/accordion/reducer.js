import * as CONST from './constants';
/*
index - accordion item index
[true|false,true|false] 
*/
export default function reducer(state = [], { type, data }) {
  switch (type) {
    case CONST.OPEN: {
      let newState = state.slice();
      newState[data.index] = true;
      return newState;
    }
    case CONST.CLOSE: {
      let newState = state.slice();
      newState[data.index] = false;
      return newState;
    }
    case CONST.TOGGLE: {
      let newState = state.slice();
      newState[data.index] = !newState[data.index];
      return newState;
    }
  }
  return state;
}
