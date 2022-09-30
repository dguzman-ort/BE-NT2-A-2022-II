import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Button from './components/Button';
import Counter from './components/Counter';
import GlobalContext, { defaultValue } from './components/globals/context';


function App() {

  // const [nombre, setNombre] = useState("Daniel")
  // const [edad, setEdad] = useState(31)


  // useEffect(()=>{
  //   console.log("Hola! Estoy en el ciclo de vida MOUNT: apenas se inyecta este componente en la UI")

  //   return () => {
  //     console.log("Hola! Estoy en el ciclo de vida UNMOUNT: dejo de estar visible en la UI")
  //   }
  // }, [])

  // useEffect(() => {
  //   console.log("Cambio de el estado nombre: ", nombre);
  // },[nombre])

  // useEffect(() => {
  //   console.log("Cambio de el estado edad: ", edad);
  // },[edad])

  // useEffect(() => {
  //   console.log("Detecto cambio de mas de un estado: nombre y edad => ", nombre, edad)
  // }, [nombre, edad])



  const [estaIniciado, setEstaIniciado] = useState(defaultValue)


  return (


    <GlobalContext.Provider value={{estaIniciado, setEstaIniciado}} >
      <div className="App">
        <header className="App-header">
          {/* <p>
          Hola soy {nombre} y tengo {edad} anios
        </p> */}

          {/* <button onClick={() => setNombre(prompt("Nuevo nombre:"))}> Cambio nombre</button>
      <button onClick={() => setEdad(prompt("Nueva edad:"))}> Cambio edad</button> */}

          <Counter />

          <Button />

        </header>
      </div>
    </GlobalContext.Provider>

  );
}

export default App;
