import { useEffect, useState } from "react";
import { Button, View } from "react-native"
import Contact from "../../components/Contact"
import FormContact from "../../components/FormContact"
import Vehiculo from "../../components/Vehiculo";
import vehiculoServices from "../../services/vehiculos";
import styles from "./styles";

const Details = ({ navigation, route }) => {
    
    const { id } = route.params || {}

    const [vehiculo, setVehiculo] = useState()

    useEffect(() => {
        console.log("Tengo que ir a buscar la informacion detallada de este elemento", id);
        vehiculoServices.getVehiculo(id)
        .then(data => {
            console.log("Vehiculo a mostrar", data);
            setVehiculo(data)
        })
    }, []) // vehiculo en este caso (trabajando con la API)

    return (
        <View style={styles.container}>
            {
                (vehiculo) ?
                // <Contact contact={contact} />
                <Vehiculo vehiculo={vehiculo} showAll={true} />
                :
                <FormContact navigation={navigation} />
            }
        </View>
    )
}

export default Details