import React, { createContext, useReducer } from 'react';
export let AccordionContext = createContext();
export default function Accordion({ children }) {
  let [state, dispatch] = useReducer();
  return (
    <AccordionContext.Provider value={state}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
}
