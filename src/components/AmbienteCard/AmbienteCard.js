import React from "react";
import {View, 
        Text,
        StyleSheet, 
        Image, 
        Dimensions, 
        TouchableOpacity
    } from 'react-native';


const AmbienteCard = ({ambiente, isLeft, onNavigate}) => {
    return (
    <TouchableOpacity 
    onPress={onNavigate}
    style={[
        styles.container, 
        isLeft ? styles.leftColumn : styles.rightColumn
        ]}>
        <View style={styles.card}>
            <Image
                source={
                    {
                        uri: `data:image/jpeg;base64,${ambiente.img}`
                    }
                }
                aspectRatio={1}
                resizeMode="contain"
            />
            <View style={styles.cardTitleContainer}>
                <Text style={styles.cardTitle}>{ ambiente.title }</Text>
            </View>
        </View>
    </TouchableOpacity>);
};

const styles = StyleSheet.create({
    container: {
        // flex: .5,
        width: '50%',
        padding: 5,
        height: Dimensions.get('window').width / 2,
    },
    card: {
        flex: 1,
        borderWidth: 1,
        // margin: 10,

    },
    cardTitleContainer:{
        backgroundColor: 'black',
        opacity: 0.8,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddinngTop: 10,
        paddingBottom: 10,
        paddingLeft: 5.5,
        paddingRight: 5.5,
        alignItems: 'center',
    },
    cardTitle:{
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
    leftColumn: {
        paddingLeft: 10
    },
    rightColumn: {
        paddingRight: 10,    
    },
});

export default AmbienteCard;