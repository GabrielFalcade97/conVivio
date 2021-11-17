import React from 'react';
import {StyleSheet} from 'react-native';

import Login from './src/view/login';
import Menu from './src/components/menu';
import Home from './src/view/home';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();
const App: () => Node = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{headerShow:false}}/>
          <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}}/> 
          <Stack.Screen name="Home" component={Home} options={{headerShow:false}}/>
        </Stack.Navigator>     
      </NavigationContainer>
    </>
  );
};





export default App;
