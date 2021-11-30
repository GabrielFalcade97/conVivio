import * as React from 'react';
import {View, Text, Button, ScrollView, ActivityIndicator} from 'react-native';
import HeaderDrawNav from '../../components/headerDrawNav/headerDrawNav';
import AddCard from '../../components/AddCard/AddCard';
import ReservaCard from '../../components/ReservaCard/ReservaCard'
import { connect } from 'react-redux';

const isLeft = num => num % 2 === 0;

class Reserva extends React.Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.watchReservas();
    }
    
    render(){

        if(this.props.reservas === null){
            return <ActivityIndicator/>
        }

        return(
            <ScrollView>

                <HeaderDrawNav title='Reservas' navigation={this.props.navigation}/>

                <FlatList 
                data={[...this.props.reservas, {isLast: true}]}
                renderItem={({item, index}) => {
                    return(
                        item.isLast ? 
                           <AddCard 
                            onNavigate={() => this.props.navigation.navigate('novaReservaScreen')}
                           />
                            :
                            <ReservaCard 
                            ambiente={item}
                            isLeft={isLeft(index)}
                            onNavigate={() => this.props.navigation.navigate('reservaDetalhe', {reserva: item})}
                            />
                    );
                }}

                keyExtractor={item => item.id}
                numColumns={2}
           /> 

            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    const {listaReservas} = state;

    if(listaReservas === null){
        return {reservas: listaReservas};
    }

    const keys = Object.keys(listaReservas);
    const listaReservasComId = keys.map(key => {
        return {...listaReservas[key], id: key}
    })
    return {reservas: listaReservasComId};
}

export default connect(
    mapStateToProps,
    {watchReservas}
    )(Reserva)
