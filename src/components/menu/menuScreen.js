import * as React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../view/home/homeScreen';
import Reserva from '../../view/reserva/reservaScreen';
import Ambiente from '../../view/ambiente/AmbienteScreen';
import AmbienteDetalhe from '../../view/ambiente/ambienteDetalhe';
import NovoAmbienteScreen from '../../view/ambiente/NovoAmbienteScreen';
import novaReservaScreen from '../../view/reserva/novaReserva';
import reservaDetalhe from '../../view/reserva/reservaDetalhe';
import Icon from 'react-native-vector-icons/FontAwesome';



Icon.loadFont();
const AmbienteStack = createStackNavigator();

const Drawer = createDrawerNavigator();

export default function Menu() {
    return (
        <Drawer.Navigator
            initialRouteName="Home" 
            drawerStyle={styles.drawerStyle}
            screenOptions={{ labelStyle: { color: "#ece1e1", fontSize: 18 } }}
            drawerContent={props => <CustomDrawerContent {...props} />}

        >

            <Drawer.Screen
                name="Home"
                component={Home}
            />


            <Drawer.Screen
                name="Reserva"
                component={Reserva}
            />

            <Drawer.Screen
                name='novaReservaScreen'
                component={novaReservaScreen}
            />

            <Drawer.Screen
                name='reservaDetalhe'
                component={reservaDetalhe}
            />

            <Drawer.Screen
                name="Ambiente"
                component={Ambiente}
                options={{ drawerIcon: config => <Icon name="home" size={18} color="#ece1e1" /> }}
            />

            <Drawer.Screen
                name='AmbienteDetalhe'
                component={AmbienteDetalhe}
            />

            <Drawer.Screen
                name='NovoAmbienteScreen'
                component={NovoAmbienteScreen}
            />



        </Drawer.Navigator>
    )
}

function CustomDrawerContent(props) {
    console.log("props: ", props)
    return (
        <DrawerContentScrollView {...props}>

            <DrawerItem label="Home" onPress={() => { props.navigation.navigate('Home') }} labelStyle={{ color: "#ece1e1", fontSize: 18 }} icon={() => <Icon name="home" size={18} color="#ece1e1" />} />
            <DrawerItem label="Reservas" onPress={() => { props.navigation.navigate('Reserva') }} labelStyle={{ color: "#ece1e1", fontSize: 18 }} icon={() => <Icon name="calendar" size={18} color="#ece1e1" />} />
            <DrawerItem label="Ambientes" onPress={() => { props.navigation.navigate('Ambiente') }} labelStyle={{ color: "#ece1e1", fontSize: 18 }} icon={() => <Icon name="home" size={18} color="#ece1e1" />} />
            <DrawerItem label="Sair" onPress={() => { props.navigation.popToTop() }} labelStyle={{ color: "#ece1e1", fontSize: 18 }} icon={() => <Icon name="sign-out" size={18} color="#ece1e1" />} />

        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    drawerStyle: {
        width: 250,
        backgroundColor: '#B15CFC',
    }
})