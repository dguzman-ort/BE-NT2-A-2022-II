import { Button, View } from "react-native"
import Contact from "../../components/Contact"
import FormContact from "../../components/FormContact"
import styles from "./styles";

const Details = ({contact}) => {
    return (
        <View style={styles.container}>
            {
                (contact) ?
                <Contact contact={contact} />
                :
                <FormContact />
                
            }
        </View>
    )
}

export default Details