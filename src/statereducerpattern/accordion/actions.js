import * as CONST from './constants';

export function handleOpen() {
  dispatch({ type: CONST.OPEN });
}
export function handleClose() {
  dispatch({ type: CONST.CLOSE });
}
export function handleToggle() {
  dispatch({ type: CONST.TOGGLE });
}
