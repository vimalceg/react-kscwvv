import React from 'react';
import { Accordion, AccordionItem,AccordionContext } from './accordion';
export default function App() {
  return (
    <Accordion>
      <
      <AccordionItem index={0} heading="Accordion1">
        Item1
      </AccordionItem>
      <AccordionItem index={0} heading="Accordion2">
        Item2
      </AccordionItem>
    </Accordion>
  );
}
