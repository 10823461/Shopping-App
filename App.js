import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './Screens/Login';
import Welcome from './Screens/Welcome';

const Stack = createNativeStackNavigator();
export default function App() {
  return ( 
    
   
      <NavigationContainer>  
       <Stack.Navigator
          screenOptions={{headerShown:true}}>
          <Stack.Screen name="Welcome" component={Welcome } />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
        <StatusBar style="auto"/>
      </NavigationContainer>
     

  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: "row",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


 
