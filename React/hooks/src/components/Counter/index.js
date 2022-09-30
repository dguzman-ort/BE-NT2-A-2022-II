import { useContext, useEffect, useState } from "react";
import GlobalContext from "../globals/context";
import "./index.css";

let idInterval
export default () => {

    const { estaIniciado } = useContext(GlobalContext)

    const [counter, setCounter] = useState(0)

    useEffect(()=> {
        console.log("Esta iniciado?", estaIniciado)

        if (estaIniciado){
            idInterval = setInterval(() => {
                //console.log(counter)
                setCounter(contadorAnterior => {
                    console.log(contadorAnterior)
                   return contadorAnterior + 1
                })

            }, 1000);
        }else {
            clearInterval(idInterval)
        }

    }, [estaIniciado])

    return (
        <div>
            <span className="counter">{counter}</span>
        </div>
    )
}