import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useImperativeHandle,
} from 'react';
function useSwitch({ defaultChecked, checked: propsChecked, onChange }, ref) {
  console.log(propsChecked, defaultChecked);
  let [checked, setChecked] = useState(propsChecked || defaultChecked);
  let handleChange = useCallback(
    (checked) => {
      setChecked(() => {
        console.log('setChecked');
        return checked;
      });
      onChange(checked);
    },
    [onChange]
  );

  useImperativeHandle(ref, () => ({
    reset: () => {
      console.log('reset', defaultChecked);
      setChecked(defaultChecked);
    },
  }));

  /* reset local state when constrolled component*/
  useEffect(() => {
    if (!defaultChecked) {
      setChecked(propsChecked);
    }
  }, [propsChecked]);
  return { checked, handleChange };
}
let Switch = React.forwardRef((props, ref) => {
  let { checked, handleChange } = useSwitch(props, ref);
  return <SwitchSke checked={checked} onChange={handleChange} />;
});

function SwitchSke({ checked, onChange }) {
  return (
    <div>
      {checked ? 'true' : 'false'}
      <span onClick={onChange.bind(null, !checked)}>Click</span>
    </div>
  );
}
export default function SwitchController() {
  let [controllerChecked, setChecked] = useState(false);
  let ref = useRef();
  let handleSwitch = useCallback((checked) => {
    console.log('api ');
    // setChecked(checked);
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
      <div>parent state- {controllerChecked ? 'true' : 'false'}</div>
      <br />
      <div
        onClick={() => {
          ref.current && ref.current.reset();
        }}
      >
        reset
      </div>
      <Switch
        ref={ref}
        defaultChecked={controllerChecked}
        onChange={handleSwitch}
      />
    </>
  );
}
