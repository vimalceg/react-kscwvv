import React,{useContext} from 'react';

let Tooltip = React.createContext();

export default function A() {
  let tooltip  = useContext(Tooltip);
  return <div>{tooltip.name}</div>;
}
export default function App(){
  return <Tooltip.Provider value={{name:"vimal"}}>
    <A/>
    <Tooltip.Provider value={{name:"esan"}}>
      <A/>
      <Tooltip.Provider value={{name:"vimalesan"}}>
      <A/>
      </Tooltip.Provider>
      </Tooltip.Provider>
    </Tooltip.Provider>
}
