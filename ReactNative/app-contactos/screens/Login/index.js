import { Button, SafeAreaView, View, StyleSheet } from "react-native"
import * as Google from 'expo-auth-session/providers/google';
import { useEffect } from "react";



const Login = () => {

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '479655700428-c3envph2jpd4o2of7ev156vlgvn6dqv1.apps.googleusercontent.com'
    });

    useEffect(() => {
        if (response?.type === 'success') {
            const { authentication } = response;
            console.log("authentication", authentication);

            //TODO: Esto se hace a nivel de backend. 
            fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${authentication.accessToken}`)
            .then(res => res.json())
            .then(data => console.log(data))
        }
    }, [response]);


    return (
        <SafeAreaView>
            <View>
                <Button
                    title="Login con Google"
                    onPress={() => {
                        promptAsync()
                    }}
                />
            </View>
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