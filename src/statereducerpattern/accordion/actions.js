import * as CONST from './constants';

export function handleOpen(index) {
  return {
    type: CONST.OPEN,
    data: {
      index: index,
    },
  };
}
export function handleClose(index) {
  return {
    type: CONST.CLOSE,
    data: {
      index: index,
    },
  };
}
export function handleToggle(index) {
  return {
    type: CONST.TOGGLE,
    data: {
      index: index,
    },
  };
}
