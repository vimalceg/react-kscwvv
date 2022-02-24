import { useCallback } from 'react';

export default function bindActions(obj, dispatch) {
  return Object.keys(obj).reduce((res, key) => {
    res[key] = useCallback(
      (...args) => dispatch(obj[key].apply(null, args)),
      []
    );
    return res;
  }, {});
}
