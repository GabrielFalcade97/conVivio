import React from 'react';
import {StyleSheet} from 'react-native';

import Login from './view/login';
import Menu from './components/menu';
import Home from './view/home';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import Ambiente from './view/ambiente';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerItem, DrawerItemList } from '@react-navigation/drawer';





// Teste
function CustomDrawerContent(props) {
  return (
    
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Logout" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  );
}

// 


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



const App: () => React$Node = () => {
  return (
      <NavigationContainer>
        <Menu/>
        {/* <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Ambiente" component={Ambiente} options={{headerShown: false}} /> 
          <Drawer.Screen name="Login" component={Login} options={ {headerShown: false} } />
          <Drawer.Screen name="Menu" component={Menu} options={ {headerShown: false} } />
          <Drawer.Screen name="Home" component={Home} options={ {headerShown: false} } />
        </Drawer.Navigator> */}
      </NavigationContainer>
      );
};





export default App;
