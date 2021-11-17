import * as React from 'react';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';

import Home from '../../view/home';
import Reserva from '../../view/reserva';
import Ambiente from '../../view/ambiente';

import Icon from 'react-native-vector-icons/FontAwesome';


Icon.loadFont();

const Drawer = createDrawerNavigator();

export default function Menu() {
    return(
        <Drawer.Navigator 
        initialRouteName= "Home"
            drawerStyle={styles.drawerStyle}
            screenOptions={{labelStyle: {color: "#ece1e1", fontSize: 18}}}   
            drawerContent={props => <CustomDrawerContent {...props} />}
            
        >
            <Drawer.Screen 
            name="Home" 
            component={Home} 
            options= {{drawerIcon: config => <Icon name="home" size={18} color="#ece1e1"/>}}
            />


            <Drawer.Screen
             name="Reserva" 
             component={Reserva}
             options= {{drawerIcon: config => <Icon name="calendar" size={18} color="#ece1e1"/>}} 
             />

             <Drawer.Screen
              name="Ambiente"
              component={Ambiente}
              options= {{drawerIcon: config => <Icon name="home" size={18} color="#ece1e1"/>}}
             />
        </Drawer.Navigator>
    )
}

function CustomDrawerContent(props){
    return(
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>
            <DrawerItem label="Sair" onPress={()=> {props.navigation.popToTop()}} labelStyle={{color: "#ece1e1", fontSize: 18}} icon={()=><Icon name="sign-out" size={18} color="#ece1e1"/>}/>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    drawerStyle: {
        width: 250,
        backgroundColor: '#B15CFC',
    }
})