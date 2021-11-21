import * as React from 'react';
import {View,Text, FlatList, StyleSheet} from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import ambientes from '../../../ambientes.json'
import AmbienteCard from '../../components/AmbienteCard/AmbienteCard';

import HeaderDrawNav from '../../components/headerDrawNav';

const isLeft = num => num % 2 === 0;

export default function Ambiente({navigation}, props) {
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
                            onNavigate={() => props.navigation.navigate('ambienteDetalhe', {ambiente: item})}
                            />
                    );
                }}

                keyExtractor={item => item.id.toString()}
                numColumns={2}
           /> 
        </View>
        );
    }

const sytles = StyleSheet.create({

})
