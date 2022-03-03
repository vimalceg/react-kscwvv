import React from 'react';
export default function AccordionItem(props) {
  let { isOpen, children, onClick } = props;
  return (
    <div style={{ display: isOpen ? 'block' : 'none' }} onClick={onClick}>
      {children}
    </div>
  );
}
