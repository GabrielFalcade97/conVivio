import * as React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import AmbienteCard from '../../components/AmbienteCard/AmbienteCard';
import { createStackNavigator } from '@react-navigation/stack';
import AmbienteDetalhe from './ambienteDetalhe';
import NovoAmbienteScreen from './NovoAmbienteScreen';
import { connect } from 'react-redux';
import { watchAmbientes } from '../../actions/ambientesActions';

import HeaderDrawNav from '../../components/headerDrawNav/headerDrawNav';
import AddCard from '../../components/AddCard/AddCard';



const isLeft = num => num % 2 === 0;

class Ambiente extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    componentDidMount(){
        this.props.watchAmbientes();
    }

    render(){
    return(
        <View>
           <HeaderDrawNav title='Ambientes' navigation={this.props.navigation}/>
           <FlatList 
                data={[...this.props.ambientes, {isLast: true}]}
                renderItem={({item, index}) => {
                    return(
                        item.isLast ? 
                           <AddCard 
                            onNavigate={() => this.props.navigation.navigate('NovoAmbienteScreen')}
                           />
                            :
                            <AmbienteCard 
                            ambiente={item}
                            isLeft={isLeft(index)}
                            onNavigate={() => this.props.navigation.navigate('AmbienteDetalhe', {ambiente: item})}
                            />
                    );
                }}

                keyExtractor={item => item.id}
                numColumns={2}
           /> 
        </View>
        );
    }
}

const mapStateToProps = state => {
    const {listaAmbientes} = state;

    const keys = Object.keys(listaAmbientes);
    const listaAmbientesComId = keys.map(key => {
        return {...listaAmbientes[key], id: key}
    })
    return {ambientes: listaAmbientesComId};
    
}

export default connect(
    mapStateToProps, 
    {watchAmbientes}
    )(Ambiente)
