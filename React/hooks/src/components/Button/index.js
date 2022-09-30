import { useContext, useState } from "react"
import GlobalContext from "../globals/context";

export default ({className}) => {
    const {estaIniciado, setEstaIniciado} = useContext(GlobalContext)


    return (
        <button className={className} onClick={() => setEstaIniciado(prev => !prev)}> { estaIniciado ? "Pausar" : "Iniciar"} </button>
    )
}