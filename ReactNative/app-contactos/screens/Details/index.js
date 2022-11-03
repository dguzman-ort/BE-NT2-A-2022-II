import { Button, View } from "react-native"
import Contact from "../../components/Contact"
import FormContact from "../../components/FormContact"
import styles from "./styles";

const Details = ({ navigation, route }) => {
    
    const { contact } = route.params || {}
    
    return (
        <View style={styles.container}>
            {
                (contact) ?
                <Contact contact={contact} />
                :
                <FormContact navigation={navigation} />
                
            }
        </View>
    )
}

export default Details