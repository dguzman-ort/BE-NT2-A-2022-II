import { View, Text } from "react-native"
import { Card } from "@rneui/themed";



const Vehiculo = ({ vehiculo, showAll }) => {
    return (
        <View>
            <Card containerStyle={{ marginTop: 15 }}>
                <Card.Title>FONTS</Card.Title>
                <Card.Divider />
                <Text h1>
                    MARCA: {vehiculo.marca}
                </Text>
                <Text h2>
                    MODELO: {vehiculo.modelo}
                </Text>

                {
                    showAll ?
                    <>
                        <Text h3>
                            VERSION: {vehiculo.version}
                        </Text>
                    </>
                    :
                        <></>
                }
                    
                
                
            </Card>
        </View>
    )
}

export default Vehiculo