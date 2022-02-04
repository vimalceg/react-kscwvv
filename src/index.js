import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import App from './App7';

function useSwitch({ checked: propsChecked, onChange }) {
  let [checked, setChecked] = useState(propsChecked);
  function handleChange() {
    setChecked(!checked);
    onChange(!checked);
  }
  useEffect(() => {
    setChecked(propsChecked);
  }, [propsChecked != checked]);
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
      <span onClick={onChange}>Click</span>
    </div>
  );
}

function SwitchController() {
  let [controllerChecked, setChecked] = useState(true);
  let [count, setCount] = useState(0);
  function handleSwitch(checked) {
    setCount(count + 1);
    if (count < 3) {
      console.log('call...');
      setChecked(checked);
    }
  }
  return (
    <>
      <div>{count}</div>
      <Switch checked={controllerChecked} onChange={handleSwitch} />
    </>
  );
}

ReactDOM.render(<SwitchController />, document.getElementById('root'));
