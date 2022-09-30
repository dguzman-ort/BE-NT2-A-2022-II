// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Counters from './components/Counters';
import Button from './components/Button';
import Tarea from "./components/Tarea";
//import dataTareas from "./tareas";

import GlobalContext from "./components/globals/context";

function App() {

  const [tareas, setTareas] = useState([])

  const addTodo = () => {
    const tituloTarea = prompt("Titulo de Tarea: ")
    console.log("Se agrega esta Tarea: ", tituloTarea)
    const todo = {
      id: new Date().getTime(),
      title: tituloTarea,
      checked: false
    }

    setTareas([...tareas, todo])

  }

  const updateTodo = (todo) => {
    console.log("Soy el padre. Necesito modificar este elemento", todo)

    const nuevoArray = tareas.map(item => {
      return item.id === todo.id ? { ...todo, checked: !todo.checked } : item
    })

    setTareas(nuevoArray)

  }

  const removeTodo = (todo) => {
    console.log("Soy el padre, tengo que remover este TODO", todo);
    const nuevoArray = tareas.filter(item => todo.id !== item.id)
    setTareas(nuevoArray)
  }

  return (

    <GlobalContext.Provider value={{todos: tareas, test: "test"}}>
      <div className="App">
        <div className="container center">
          <h1 className="center title">TODO App</h1>
          {/* <div className="flow-right controls">
          <span>Item count: <span id="item-count">{totalTarea}</span></span>
          <span>Unchecked count: <span id="unchecked-count">3</span></span>
        </div> */}

          <Counters />

          <Button className="button center" onClick={addTodo} text={'Agregar Tarea'} />


          <ul id="todo-list" className="todo-list">

            {
              tareas.map(item => <Tarea key={item.id} todo={item} onClickCheckbox={updateTodo} onClickRemove={removeTodo} />)
            }

          </ul>
        </div>
      </div>
    </GlobalContext.Provider>

  );
}

export default App;
