import React, { useState, useEffect, useCallback } from 'react';
function useSwitch({ checked: propsChecked, onChange }) {
  let [checked, setChecked] = useState(propsChecked);
  let handleChange = useCallback(
    (checked) => {
      setChecked(checked);
      onChange(checked);
    },
    [onChange]
  );
  useEffect(() => {
    setChecked(propsChecked);
  }, [propsChecked]);
  return { checked, handleChange };
}
function Switch(props) {
  let { checked, handleChange } = useSwitch(props);
  return <SwitchSke checked={checked} onChange={handleChange} />;
}

function SwitchSke({ checked, onChange }) {
  return (
    <div>
      {checked ? 'true' : 'false'}
      <span onClick={onChange.bind(null, !checked)}>Click</span>
    </div>
  );
}

export default function SwitchController() {
  let [controllerChecked, setChecked] = useState(true);

  let handleSwitch = useCallback((checked) => {
    setChecked(checked);
  });

  return (
    <>
      <div
        onClick={() => {
          setChecked(true);
        }}
      >
        reset to True
      </div>
      <div
        onClick={() => {
          setChecked(false);
        }}
      >
        reset to false
      </div>
      <div>child state- {controllerChecked ? 'checked' : 'not checked'}</div>
      <Switch checked={controllerChecked} onChange={handleSwitch} />
    </>
  );
}
