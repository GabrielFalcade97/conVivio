import * as React from 'react';
import {View, Text, Button} from 'react-native';
import HeaderDrawNav from '../../components/headerDrawNav';

export default function Home({navigation}) {

    return(
        <View>
           <HeaderDrawNav title='Home' navigation={navigation}/>
            <Text>Tela Home</Text>
            <Text>BUTTON AMBIENTE</Text>
            <Text>BUTTON RESERVA</Text>
        </View>
    );
}
