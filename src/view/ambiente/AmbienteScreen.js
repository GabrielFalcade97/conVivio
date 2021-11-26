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
           <HeaderDrawNav title='Ambientes' navigation={navigation}/>
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

const AmbienteStack = createStackNavigator();

function AmbienteRoutes({navigation}) {
    return(
        <AmbienteStack.Navigator initialRouteName='Ambiente'>
            <AmbienteStack.Screen 
                name='Ambiente'
                component={Ambiente}
                options={{headerShown: false}}
            />   
            <AmbienteStack.Screen 
                name='AmbienteDetalhe'
                component={AmbienteDetalhe}
                options={({ route }) => ({ title: route.params.ambiente.title, headerShown: true })}   
            />   
            <AmbienteStack.Screen 
                name='NovoAmbienteScreen'
                component={NovoAmbienteScreen}
                options={{headerShown: true, title: 'Novo Ambiente'}}        
            />
        </AmbienteStack.Navigator>
    )
}



const mapStateToProps = state => {
    const {listaAmbientes} = state;

    const keys = Object.keys(listaAmbientes);
    const listaAmbientesComId = keys.map(keys => {
        return {...listaAmbientes[key], id: key}
    })
    return {ambientes: listaAmbientesComId, ...state};
    
}




export default AmbienteRoutes
connect(mapStateToProps, {watchAmbientes})(Ambiente);
