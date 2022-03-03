import React from 'react';
import { Accordion, AccordionItemWithContext } from './accordion';
export default function App() {
  return (
    <Accordion>
      <h1>Dashboard Link</h1>
      <AccordionItemWithContext index={0} heading="Accordion1">
        Item1
      </AccordionItemWithContext>
      <AccordionItemWithContext index={1} heading="Accordion2">
        Item2
      </AccordionItemWithContext>
    </Accordion>
  );
}
