import { useContext } from "react";
import GlobalContext from "../globals/context";

const Counters = () => {

  const { todos } = useContext(GlobalContext)

  console.log(todos);
  const uncheckedTodos = todos.filter(element => !element.checked).length

  // const uncheckedTodos = todos.reduce((counter, element) => {
  //     return (!element.checked) ? counter + 1 : counter
  // },0)

  return (
    <div className="flow-right controls">
      <span>Item count: <span id="item-count">{todos.length}</span></span>
      <span>Unchecked count: <span id="unchecked-count">{uncheckedTodos}</span></span>
    </div>
  )
}

export default Counters