import * as React from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import HeaderDrawNav from '../../components/headerDrawNav/headerDrawNav';



export default class Reserva extends React.Component {
    render(){
        return(
            <ScrollView>

                <HeaderDrawNav title='Reservas' navigation={this.props.navigation}/>

                <Text>Todas reservas aqui pro adm</Text>

                <Text>--------------------------</Text>

                <Text>Minhas reservas</Text>

                <Text>--------------------------</Text>

                <Text>Colocar umas reservas aqui</Text>

                <Text>--------------------------</Text>

                <Text>Botão ou card de reserva aqui</Text>

            </ScrollView>
        )
    }
}