import { useState, useContext, useEffect } from "react";
import { View, Text } from "react-native";
import { vibrate } from "../../utils";
import GlobalContext from "../global/GlobalContext";
import styles from "./styles"

const DEFAULT_WORK_MINS = 0.17
const DEFAULT_BREAK_MINS = 0.05

const minToSec = min => min * 60

let interval

export default () => {

    const { activeTimer, isWorking, setIsworking } = useContext(GlobalContext)
    

    const [timeRemaining, setTimeRemaining] = useState(minToSec(DEFAULT_WORK_MINS))

    useEffect(() => {
        if (Math.floor(timeRemaining) === 0) {
            vibrate()
            setTimeRemaining((isWorking) ? minToSec(DEFAULT_BREAK_MINS) : minToSec(DEFAULT_WORK_MINS))

            // if (isWorking){
            //     setTimeRemaining(minToSec(DEFAULT_BREAK_MINS))
            // }else{
            //     setTimeRemaining(minToSec(DEFAULT_WORK_MINS))
            // }

            setIsworking(prev => !prev)
        }
    }, [timeRemaining])

    useEffect(() => {
        console.log("Aqui iniciamos o pausamos el cronometro");
        if (activeTimer){
            // Hay que detenerlo
            clearInterval(interval)
        }else {
            interval = setInterval(() => {
                setTimeRemaining(prev => prev -1)
            }, 1000);
        }
    }, [activeTimer])

    const mins = Math.floor(timeRemaining / 60)
    const secs = Math.floor(timeRemaining % 60)

    const paddZero = value => value < 10 ? `0${value}`: value

    
    return (
        <View style={styles.center}>
            <Text style={styles.text}>{paddZero(mins)}:{paddZero(secs)}</Text>
        </View>
    )
}