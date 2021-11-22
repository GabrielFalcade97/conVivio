import * as React from 'react';
import {View,Text, FlatList, StyleSheet} from 'react-native';
import ambientes from '../../../ambientes.json'
import AmbienteCard from '../../components/AmbienteCard/AmbienteCard';
import { createStackNavigator } from '@react-navigation/stack';
import AmbienteDetalhe from './ambienteDetalhe';


import HeaderDrawNav from '../../components/headerDrawNav/headerDrawNav';

const isLeft = num => num % 2 === 0;

function Ambiente({navigation}){
    return(
        <View>
           <HeaderDrawNav title='Ambientes' navigation={navigation}/>
           <FlatList 
                data={ambientes}
                renderItem={({item, index}) => {
                    return(
                            <AmbienteCard 
                            ambiente={item}
                            isLeft={isLeft(index)}
                            onNavigate={() => navigation.navigate('AmbienteDetalhe', {ambiente: item})}
                            />
                    );
                }}

                keyExtractor={item => item.id.toString()}
                numColumns={2}
           /> 
        </View>
        );
}

const AmbienteStack = createStackNavigator();

export default function AmbienteRoutes({navigation}) {
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
                options={{headerShown: false}}
                options={({navigation}) => {
                    const { ambiente } = navigation.state.params;
                    return {
                      title: ambiente.title
                    }
                }
            }
                        
            />   
        </AmbienteStack.Navigator>
    )
}

const sytles = StyleSheet.create({

})
