import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Contact from './components/Contact';
import { NavigationContainer  } from "@react-navigation/native";

import Details from './screens/Details';
import Home from './screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {


  const StackNavigator = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <StackNavigator.Navigator>

        <StackNavigator.Screen name='Home' component={Home}
          options={
            {
              headerShown: false    
            }
          }
        />
        <StackNavigator.Screen name='Details' component={Details} options={
          {
            title: "Add Contact"
          }
        } />
        
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

