import * as React from 'react';
import {View, Button} from 'react-native';
import HeaderDrawNav from '../../components/headerDrawNav/headerDrawNav';
import Icon from 'react-native-vector-icons/FontAwesome';


Icon.loadFont();

export default function Home({navigation}) {

    return(
        <View>
           <HeaderDrawNav title='Home' navigation={navigation}/>

            <Button  
                title="AMBIENTES" 
                color="#AC59F5"
                
            />
            <Button 
                title="RESERVAS"
                color="#AC59F5"
                
            />
        
        </View>
    );
}


    
    
