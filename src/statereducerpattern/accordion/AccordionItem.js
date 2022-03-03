import React from 'react';
export default function AccordionItem(props) {
  let { isOpen, children, onClick, heading, index } = props;

  return (
    <div>
      <div onClick={() => onClick(index)}>{heading}</div>
      <div style={{ display: isOpen ? 'block' : 'none' }}>{children}</div>
    </div>
  );
}
