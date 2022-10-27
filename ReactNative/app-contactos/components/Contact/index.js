import { View, Text } from "react-native"
import { Card } from "@rneui/themed";



const Contact = ({ contact }) => {
    return (
        <View>
            <Card containerStyle={{ marginTop: 15 }}>
                <Card.Title>FONTS</Card.Title>
                <Card.Divider />
                <Text h1>
                    NOMBRE: {contact.nombreCompleto}
                </Text>
                <Text h2>
                    TELEFONO: {contact.telefono}
                </Text>
                <Text h3>
                    EDAD: {contact.edad}
                </Text>
            </Card>
        </View>
    )
}

export default Contact