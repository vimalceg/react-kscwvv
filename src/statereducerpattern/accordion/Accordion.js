import React, { useReducer } from 'react';
import AccordionContext from './AccordionContext';
import { handleToggle } from './actions';
import reducer from './reducer';

export default function Accordion({ children }) {
  let [accordionState, dispatch] = useReducer(reducer, []);

  return (
    <AccordionContext.Provider
      value={{
        accordionState,
        handleClick: (index) => {
          dispatch(handleToggle(index));
        },
      }}
    >
      <div>{children}</div>
    </AccordionContext.Provider>
  );
}
