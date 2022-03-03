import React from 'react';
import useCommonReducer from '../reducerHandler';
import AccordionContext from './AccordionContext';
import { handleToggle } from './actions';
import reducer from './reducer';

export default function Accordion({
  children,
  customReducer = (state, action) => state,
  position = 'bottom',
  opened = [],
}) {
  let [accordionState, dispatch] = useCommonReducer(
    reducer,
    customReducer,
    opened
  );

  return (
    <AccordionContext.Provider
      value={{
        accordionState,
        handleClick: (index) => {
          dispatch(handleToggle(index));
        },
        position,
      }}
    >
      <div>{children}</div>
    </AccordionContext.Provider>
  );
}
