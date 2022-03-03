import React from 'react';
export default function AccordionItem(props) {
  let { isOpen, children, onClick, heading, index, position } = props;
  let directionObject = {
    left: 'row',
    right: 'row-reverse',
    bottom: 'column',
    top: 'column-reverse',
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: directionObject[position],
      }}
    >
      <div onClick={() => onClick(index)}>{heading(position)}</div>
      <div style={{ display: isOpen ? 'block' : 'none' }}>{children}</div>
    </div>
  );
}
