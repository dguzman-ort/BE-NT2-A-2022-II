import { Button, SafeAreaView, View, StyleSheet, TouchableOpacity, Image } from "react-native"
import * as Google from 'expo-auth-session/providers/google';
import { useContext, useEffect } from "react";
import AuthService from "../../services/login";
import AuthContext from "../../services/AuthContext";


const Login = () => {

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '479655700428-c3envph2jpd4o2of7ev156vlgvn6dqv1.apps.googleusercontent.com'
    });

    const { setAuthenticationData } = useContext(AuthContext)

    useEffect(() => {
        if (response?.type === 'success') {
            const { authentication } = response;
            //console.log("authentication", authentication);

            AuthService.login(authentication.accessToken).then(data => {
                console.log("Vamos a guardar data del usuario", data);
                setAuthenticationData(data)
            })


        }
    }, [response]);


    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    promptAsync()
                }}
            >
                <View >
                    {/* <Image
                        source={{uri: ''}}
                     /> */}
                     <Image source={require('../../assets/btn_google_signin_light_normal_web.png')} />
                     
                </View>
            </TouchableOpacity>
            {/* <Button
                    title="Login con Google"
                    onPress={() => {
                        promptAsync()
                    }}
                /> */}
        </SafeAreaView>

    )


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default Login