import React from 'react';
import { Accordion, AccordionItemWithContext } from './accordion';
export default function App() {
  return (
    <Accordion position="top">
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
