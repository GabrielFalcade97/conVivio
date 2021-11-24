import * as React from 'react';
import {View,Text, FlatList, StyleSheet} from 'react-native';
import ambientes from '../../../ambientes.json'
import AmbienteCard from '../../components/AmbienteCard/AmbienteCard';
import { createStackNavigator } from '@react-navigation/stack';
import AmbienteDetalhe from './ambienteDetalhe';
import NovoAmbienteScreen from './NovoAmbienteScreen';

import HeaderDrawNav from '../../components/headerDrawNav/headerDrawNav';
import AddCard from '../../components/AddCard/AddCard';



const isLeft = num => num % 2 === 0;

function Ambiente({navigation}){
    return(
        <View>
           <HeaderDrawNav title='Ambientes' navigation={navigation}/>
           <FlatList 
                data={[...ambientes, {isLast: true}]}
                renderItem={({item, index}) => {
                    return(
                        item.isLast ? 
                           <AddCard 
                            onNavigate={() => navigation.navigate('NovoAmbienteScreen')}
                           />
                            :
                            <AmbienteCard 
                            ambiente={item}
                            isLeft={isLeft(index)}
                            onNavigate={() => navigation.navigate('AmbienteDetalhe', {ambiente: item})}
                            />
                    );
                }}

                keyExtractor={item => item.id}
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

const sytles = StyleSheet.create({

})
