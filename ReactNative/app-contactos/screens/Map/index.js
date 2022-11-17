import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Map = () => {

    const [location, setLocation] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let { coords } = await Location.getCurrentPositionAsync({});
            setLocation(coords);
        })();
    }, []);

    useEffect(() => {
        console.log(location);
    }, [location])

    return (
        <View>
            {
                location ?
                    <MapView style={styles.map}
                        initialRegion={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        <Marker
                            coordinate={
                                {
                                    latitude: location.latitude,
                                    longitude: location.longitude,
                                    latitudeDelta: 0.09,
                                    longitudeDelta: 0.05,
                                }
                            }
                            image={require('../../assets/Sample_User_Icon.png')}
                            title={"Mi location"}
                            description={"Mi descripcion"}
                        />
                    </MapView>
                    :
                    <>
                    </>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default Map;