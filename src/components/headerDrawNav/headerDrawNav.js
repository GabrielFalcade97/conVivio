import * as React from 'react'; 
import {StyleSheet, View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export default function HeaderDrawNav({ title, navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.containerButton}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} > 
                    <Icon name="bars" size={25} color="#ece1e1" />
            </TouchableOpacity>
            </View>
            <View style={styles.containerTitle}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    button: {
        backgroundColor: '#AC59F5'
    },
    text: {
        color: '#ece1e1',
        padding: 5,
        fontSize: 23,
    },
    containerTitle: {
        backgroundColor: '#AC59F5',
        width: '100%'
    },
    containerButton: {
        justifyContent: 'center',
        backgroundColor: '#AC59F5',
        paddingHorizontal: 10
    }
})