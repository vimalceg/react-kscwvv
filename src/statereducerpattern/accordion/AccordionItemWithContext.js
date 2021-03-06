import React, { useContext } from 'react';
import AccordionContext from './AccordionContext';
import AccordionItem from './AccordionItem';
console.log('AccordionContext', AccordionContext);
export default function AccordionItemWithContext(props) {
  let { index, children, heading } = props;
  let { accordionState, handleClick, position } = useContext(AccordionContext);
  console.log('position', position);
  return (
    <AccordionItem
      index={index}
      isOpen={accordionState[index]}
      onClick={handleClick}
      heading={heading}
      position={position}
    >
      {children}
    </AccordionItem>
  );
}
