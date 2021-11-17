import * as React from 'react';
import {View, Text, Button} from 'react-native';

import HeaderDrawNav from '../../components/headerDrawNav';

export default function Reserva({navigation}) {
    return(
        <View>
            <HeaderDrawNav title='Reserva' navigation={navigation}/>
            <Text>Tela Reserva</Text>
            <Text>RESERVAS</Text>
            <Text>RESERVAS</Text>
            <Text>RESERVAS</Text>
            <Text>RESERVAS</Text>
            <Text>RESERVAS</Text>
        </View>
    )
}