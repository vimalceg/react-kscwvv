import React, { useReducer } from 'react';
import AccordionContext from './AccordionContext';
import { handleToggle } from './actions';
import reducer from './reducer';

export default function Accordion({ children }) {
  let [accordionState, dispatch] = useReducer(reducer, []);
  console.log('accordionState1', accordionState);
  return (
    <AccordionContext.Provider
      value={{
        accordionState,
        handleClick: (index) => {
          console.log(index);
          dispatch(handleToggle(index));
        },
      }}
    >
      <div>{children}</div>
    </AccordionContext.Provider>
  );
}
