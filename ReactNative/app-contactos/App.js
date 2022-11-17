import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Contact from './components/Contact';
import { NavigationContainer } from "@react-navigation/native";

import Details from './screens/Details';
import Home from './screens/Home';
import Login from './screens/Login';
import { useCallback, useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthenticationContext, { authData } from './services/AuthContext';
import Settings from './screens/Settings';
import AsyncStorage from './services/AsyncStorage';
import Map from './screens/Map';
// import { createDrawerNavigator } from '@react-navigation/drawer';


const HomeNavigation = () => {
  const BottonTabNavigator = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <BottonTabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = 'ios-list';
          } else if (route.name === 'Map') {
            iconName = 'map-outline'
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>

        <BottonTabNavigator.Screen name='Home' component={Home} />
        {/* <BottonTabNavigator.Screen name='Details' component={Details}/> */}
        <BottonTabNavigator.Screen name='Map' component={Map} />
        <BottonTabNavigator.Screen name='Settings' component={Settings} />

      </BottonTabNavigator.Navigator>
    </NavigationContainer>
  );
}


export default function App() {


  const [authenticationData, setAuthenticationData] = useState(authData)


  const StackNavigator = createNativeStackNavigator()

  // const Drawernavigator = createDrawerNavigator()


  useEffect(useCallback(() => {
    // console.log("Aqui tengo que verificar si existe data en la cache del dispositivo");
    AsyncStorage.getData('AuthData')
      .then(data => {
        // console.log("Encontro data???", data);
        if (data) {
          setAuthenticationData(data)
        }
      })
  }), [])

  useEffect(useCallback(() => {
    setTimeout(() => {
      if (authenticationData) {
        AsyncStorage.storeData('AuthData', authenticationData)
      } else {
        AsyncStorage.clearAll()
      }
    });



  }), [authenticationData])

  return (
    <AuthenticationContext.Provider value={{ authenticationData, setAuthenticationData }}>

      {/* Todo lo que esta dentro del stack estara disponible dentro del arbol de navegacion */}
      {
        authenticationData ?
          <HomeNavigation />
          :
          <Login />
      }

    </AuthenticationContext.Provider>

  );
}

