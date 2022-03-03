import { useReducer } from 'react';
export default function useCommonReducer(
  defaultReducer,
  customReducer,
  initialArg,
  init
) {
  const proxyReducer = (state, action) => {
    let lastState = defaultReducer(state, action);

    if (customReducer) {
      return customReducer(lastState, action);
    }

    return lastState;
  };
  const [state, dispatch] = useReducer(proxyReducer, initialArg, init);

  return [state, dispatch];
}
