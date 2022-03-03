import React, { useReducer } from 'react';
import AccordionContext from './AccordionContext';
import {handleToggle} from './action'
export default function Accordion({ children }) {
  let [state, dispatch] = useReducer();
  return (
    <AccordionContext.Provider value={{ accordionState, handleClick()=>dispatch({type:"@ACCO"}) }}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
}
