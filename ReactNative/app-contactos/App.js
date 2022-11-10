import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Contact from './components/Contact';
import { NavigationContainer } from "@react-navigation/native";

import Details from './screens/Details';
import Home from './screens/Home';
import Login from './screens/Login';
import { useState } from 'react';


// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';



export default function App() {


  const [authenticationData, setAuthenticationData] = useState(false)


  const StackNavigator = createNativeStackNavigator()

  // const Drawernavigator = createDrawerNavigator()
  // const BottonTabNavigator = createBottomTabNavigator()
  // return (
  //   <NavigationContainer>
  //     <BottonTabNavigator.Navigator>

  //       <BottonTabNavigator.Screen name='Home' component={Home} />
  //       <BottonTabNavigator.Screen name='Details' component={Details}/>

  //     </BottonTabNavigator.Navigator>
  //   </NavigationContainer>
  // );

  return (
    <NavigationContainer>

      <StackNavigator.Navigator>
        {/* Todo lo que esta dentro del stack estara disponible dentro del arbol de navegacion */}
        {
          authenticationData ?
            <>
              <StackNavigator.Screen name='Home' component={Home} options={
                {
                  headerShown: false
                }
              } />
              <StackNavigator.Screen name='Details' component={Details}/>
            </>
            :
            <StackNavigator.Screen name='Login' component={Login} options={
              {
                headerShown: false
              }
            }/>
          
        }


      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

