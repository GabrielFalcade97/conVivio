import * as React from 'react';
import { View,
         StyleSheet, 
         Text } from 'react-native';
import HeaderDrawNav from '../../components/headerDrawNav/headerDrawNav';
import Icon from 'react-native-vector-icons/FontAwesome';


Icon.loadFont();

export default function Home({ navigation }) {

    return (
        <View style={styles.view}>
            <HeaderDrawNav title='Home' navigation={navigation} />


            <View style={styles.viewText}>
                <Text style={styles.text}>Bem-vindo</Text>
                <Text style={styles.text}> ao </Text>
                <Text style={styles.text}>ConVívio</Text>
                <Text style={styles.text}>____________________________</Text>
            </View>


            <View style={styles.viewText2}>
                <Text style={styles.text}>Acesse as informações sobre Ambientes e Reservas</Text>
                <Text style={styles.text}>____________________________</Text>
                <Text style={styles.text}>Faça sua reserva nos ambientes disponíveis em seu condomínio</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#B15CFC',
        height: '100%'
    },

    text: {
        fontFamily: 'Roboto',
        color: '#ece1e1',
        fontSize: 25,
        textAlign: 'center',
        padding: 10
    },

    viewText: {
        padding: 15,
    },

    viewText2: {
        paddingTop: 35
    },
})




