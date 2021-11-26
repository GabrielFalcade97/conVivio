import * as React from 'react';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../view/home/homeScreen';
import Reserva from '../../view/reserva/reservaScreen';
import Ambiente from '../../view/ambiente/AmbienteScreen';
import Login from '../../view/login/loginScreen';
import AmbienteDetalhe from '../../view/ambiente/ambienteDetalhe';
import NovoAmbienteScreen from '../../view/ambiente/NovoAmbienteScreen';

import Icon from 'react-native-vector-icons/FontAwesome';


Icon.loadFont();
const AmbienteStack = createStackNavigator();

const Drawer = createDrawerNavigator();

export default function Menu() {
    return(
        <Drawer.Navigator 
        initialRouteName= "Home" //trocar
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
            
            <Drawer.Screen 
                name='AmbienteDetalhe'
                component={AmbienteDetalhe}
            />  

            <Drawer.Screen
                name='NovoAmbienteScreen'
                component={NovoAmbienteScreen}
                options={{headerShown: true, title: 'Novo Ambiente'}}   
            />

        </Drawer.Navigator>
    )
}

function CustomDrawerContent(props){
    console.log( "props: " , props)
    return(
        <DrawerContentScrollView {...props}>
            {/* <DrawerItemList {...props}/> */}
            
            <DrawerItem label="Home" onPress={()=> {props.navigation.navigate('Home')}} labelStyle={{color: "#ece1e1", fontSize: 18}} icon={()=><Icon name="home" size={18} color="#ece1e1"/>}/>
            <DrawerItem label="Reservas" onPress={()=> {props.navigation.navigate('Reserva')}} labelStyle={{color: "#ece1e1", fontSize: 18}} icon={()=><Icon name="calendar" size={18} color="#ece1e1"/>}/>
            <DrawerItem label="Ambientes" onPress={()=> {props.navigation.navigate('Ambiente')}} labelStyle={{color: "#ece1e1", fontSize: 18}} icon={()=><Icon name="home" size={18} color="#ece1e1"/>}/>
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