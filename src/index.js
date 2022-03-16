import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';

// import App from './App15';
// import App from './event-customization/example2';
// import { Counter as App } from './component-structure/Counter';
// import App from './statereducerpattern';
let WSContext = React.createContext();

var Item = React.memo(({ a, index }) => {
  console.log('render', index);
  return <div>{a}</div>;
});
function Counter() {
  let [state, setState] = useState([{ a: 1 }, { a: 1 }]);
  let value = useContext(WSContext);
  useEffect(() => {
    if (value % 2 == 0) {
      let newState = state.slice();
      newState[0].a--;
      setState(newState);
    } else {
      let newState = state.slice();
      newState[1].a++;
      setState(newState);
    }
  }, [value]);
  return (
    <div>
      {value}
      {state.map((item, index) => {
        return <Item a={item.a} index={index} />;
      })}
    </div>
  );
}

function App() {
  let [msg, setMessage] = useState();
  useEffect(() => {
    setInterval(() => {
      setMessage(Math.floor(Math.random() * 100));
    }, 1000);
  }, []);
  return (
    <div>
      <WSContext.Provider value={msg}>
        <Counter />
        
      </WSContext.Provider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
