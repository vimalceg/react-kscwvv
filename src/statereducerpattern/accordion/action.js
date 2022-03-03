import * as CONST from './constants';

function handleOpen() {
  dispatch({ type: CONST.OPEN });
}
function handleClose() {
  dispatch({ type: CONST.CLOSE });
}
function handleToggle() {
  dispatch({ type: CONST.TOGGLE });
}
