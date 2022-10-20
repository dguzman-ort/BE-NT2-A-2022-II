import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import { vibrate } from "./utils";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ejemplo de vibrate</Text>
      <StatusBar style="auto" />

      <Button
        title='Vibrar'
        onPress={vibrate}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
