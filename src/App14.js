import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useImperativeHandle,
} from 'react';
function useTextBox({ defaultValue = '', value: propsValue, onChange }, ref) {
  let [value, setValue] = useState(propsValue || defaultValue);
  let handleChange = useCallback(
    (value) => {
      console.log(value);
      setValue(() => {
        return value;
      });
      onChange(value);
    },
    [onChange]
  );

  useImperativeHandle(ref, () => ({
    reset: () => {
      setValue(defaultValue);
    },
  }));

  /* reset local state when constrolled component*/
  useEffect(() => {
    if (!defaultValue) {
      setValue(propsValue);
    }
  }, [propsValue]);
  return { value, handleChange };
}
let TextBox = React.forwardRef((props, ref) => {
  let { value, handleChange } = useTextBox(props, ref);
  return <TextBoxSke value={value} onChange={handleChange} />;
});

function TextBoxSke({ value, onChange }) {
  return (
    <div>
      Textbox:
      <input
        type="text"
        value={value}
        onChange={(e) => {
          onChange(e.target.value, e);
        }}
      />
    </div>
  );
}
const debounce = (func, delay) => {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};

export default function Form() {
  let [formState, setFormState] = useState({});
  function handleFieldChange(name, value) {
    setFormState((formState) => {
      return { ...setFormState, [name]: value };
    });
  }
  return (
    <div>
      Form
      <button onClick={() => setFormState({ search })}>Import</button>
      <SearchTextBoxController
        value={formState.search}
        onChange={(value) => {
          handleFieldChange('search', value);
        }}
      />
    </div>
  );
}

var i = 0;
function SearchTextBoxController({ defaultValue = '', value, onChange }) {
  let [value, setValue] = useState(value || defaultValue);
  let ref = useRef();
  let handleChange = useCallback(
    debounce((value) => {
      i++;
      setTimeout(() => {
        console.log('setTimeout', value);
        setValue(value);
      }, [1000, 100][i % 2]);
    }, 100)
  );

  return (
    <>
      {/* <div
        onClick={() => {
          setValue('vimal');
        }}
      >
        reset to vimal
      </div>
      <div
        onClick={() => {
          setValue('vimalesan');
        }}
      >
        reset to vimalesan
      </div> */}
      <div>parent state- {value}</div>
      <br />
      <div
        onClick={() => {
          ref.current && ref.current.reset();
        }}
      >
        reset
      </div>
      <TextBox ref={ref} defaultValue={value} onChange={handleChange} />
    </>
  );
}
