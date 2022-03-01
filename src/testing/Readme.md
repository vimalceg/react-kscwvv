React
input json => respective html
same json return same html
parent to child communication using props. child to parent communication via callback props

```
JSON
{
  type:"div",
  props:{
    id:"container"
  },
  children:{
    type:"Counter",
    props:{
      onIncrement,
      onDecrement,
      count
    }
  }
}
```

React.createElement(type,props,children)
React.createElement("div",{id:"container"},React.createElement(Counter,{count,onIncrement,onDecrement}))

- no instance of the component created by us.

```
class Button extends React.Component{
  render(){
    return <button>{text}</button>
  }
}
```
there is no such code we return - new Button() or new div()
