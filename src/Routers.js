import React from 'react';

import Login from './view/login/loginScreen';
import Menu from './components/menu/menuScreen';
import Home from './view/home/homeScreen';

 import Ambiente from './view/ambiente/AmbienteScreen'

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import novoUsuario from './view/login/novoUsuario';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
        {/* <Stack.Screen name="Ambiente" component={Ambiente} options={{headerShown: false}}/>  */}
        {/* //troca por login aqui em cima ^^^^*/}
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="novoUsuario" component={novoUsuario} options={{headerShown: false}}/>
          <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}}/>
          
          
        </Stack.Navigator>
      </NavigationContainer>
      );
};


export default App;
