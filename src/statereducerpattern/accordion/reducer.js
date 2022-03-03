import * as CONST from './constants';
/*
index - accordion item index
[true|false,true|false]
*/
function reducer(state, action) {
  switch (action.type) {
    case CONST.OPEN:
      let newState = state.slice();
      newState[action.index] = true;
      return newState;
    case CONST.CLOSE:
      let newState = state.slice();
      newState[action.index] = false;
      return newState;
    case CONST.TOGGLE:
      let newState = state.slice();
      newState[action.index] = !newState[action.index];
      return newState;
  }
  return state;
}
