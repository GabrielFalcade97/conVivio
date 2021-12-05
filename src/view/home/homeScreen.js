import * as React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import HeaderDrawNav from '../../components/headerDrawNav/headerDrawNav';
import Icon from 'react-native-vector-icons/FontAwesome';


Icon.loadFont();

export default function Home({navigation}) {

    return(
        <View style={styles.view}>
           <HeaderDrawNav title='Home' navigation={navigation}/>

           
               <View style={styles.viewText}>
                <Text style={styles.text}>Bem-vindo</Text>
                <Text style={styles.text}> ao </Text>
                <Text style={styles.text}>ConVívio</Text>
                <Text style={styles.text}>_______________________________</Text>
               </View>
           

            <View style={styles.btn}>
                <Button  
                    title="AMBIENTES" 
                    color='#BD89EB'
                    // onPress={() => {
                    //     this.props.navigation.navigate('AmbienteScreen')}}
                        
                />
            </View>      
            <View style={styles.btn}>  
                <Button 
                    title="RESERVAS"
                    color='#BD89EB'
                    
                />
            </View>

            <View style={styles.viewText2}>
                <Text style={styles.text}>Acesse as informações sobre Ambientes e Reservas</Text>
            </View>
        
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#B15CFC',
        height: '100%'
    },

    btn: {
        padding: 20,
        borderRadius: 8
    },

    text: {
        fontFamily: 'Roboto',
        color: '#ece1e1',
        fontSize: 25,
        textAlign: 'center',
        padding: 5
    },
    
    viewText: {
        padding: 15, 
    },
    
    viewText2: {
        paddingTop: 80
    },
})


    
    
