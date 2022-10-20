import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button
        title='Press me!'
        onPress={() => console.log("Click on button")}
      />
      <TouchableOpacity
        onPress={() => console.log("Click on Text via TouchableOpacity")}
      >
        <View>
          <Text>Press me</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => console.log("Click on Image via TouchableOpacity")}
      >
        <View>
          <Image 
           style={styles.tinyLogo}
           source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }} />
        </View>
      </TouchableOpacity>

      <StatusBar style="auto" />
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
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
