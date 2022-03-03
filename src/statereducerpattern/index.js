import React from 'react';
import { Accordion, AccordionItemWithContext } from './accordion';
function combineReducers(...reducers) {
  return (state, changes) => {
    let result = state;
    for (let reducer of reducers) {
      result = reducer(result, changes);
    }
    return result;
  };
}
let single = (state, action) => {
  let newState = state.map((item, index) => {
    if (index != action.data.index) {
      return false;
    }
    return item;
  });
  return newState;
};
let preventClose = (state, action) => {
  let anyOneOpen = state.some((item) => Boolean(item));
  if (!anyOneOpen) {
    let newState = state.slice();
    newState[action.data.index] = true;
    return newState;
  }
  return state;
};
export default function App() {
  return (
    <Accordion
      position="bottom"
      customReducer={combineReducers(single, preventClose)}
      opened={[true]}
    >
      <AccordionItemWithContext
        index={0}
        heading={({ position }) => <div>Accordion1</div>}
      >
        Item1
      </AccordionItemWithContext>
      <AccordionItemWithContext
        index={1}
        heading={({ position }) => <div>Accordion2</div>}
      >
        Item2
      </AccordionItemWithContext>
    </Accordion>
  );
}
