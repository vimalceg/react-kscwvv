import React from 'react';
export default function AccordionItem(props) {
  let { isOpen, children, onClick, heading } = props;
  return (
    <div>
      <div onClick={onClick}>{heading}</div>
      <div style={{ display: isOpen ? 'block' : 'none' }}>{children}</div>
    </div>
  );
}
