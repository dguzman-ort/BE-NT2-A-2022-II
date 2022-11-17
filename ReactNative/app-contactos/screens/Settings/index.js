import { useContext, useEffect } from "react";
import { Button, SafeAreaView, View } from "react-native"
import AuthContext from "../../services/AuthContext";
import { Avatar, Divider } from '@rneui/themed';
import styles from "./styles";

const Settings = ({ navigation, route }) => {
    const {authenticationData, setAuthenticationData} = useContext(AuthContext)

    useEffect(() => {
        console.log(authenticationData);
    }, [])

    const logout = () => {
        setAuthenticationData(null)
    }

    return (
        <View style={styles.container}>

            <Avatar
              size={64}
              rounded
              source={{ uri: authenticationData.picture }}
            />

            <Divider />

            <Button
                title="Logout"
                onPress={logout}
             />
        </View>

    )
}

export default Settings