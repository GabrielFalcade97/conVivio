import React from "react";
import {View, 
        StyleSheet, 
        Image, 
        Dimensions, 
        TouchableOpacity} from 'react-native';


const AddCard = ({isLeft, onNavigate}) => {
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
                        uri: "https://pics.freeicons.io/uploads/icons/png/20340289291547546467-512.png"
                    }
                }
                aspectRatio={1}
                resizeMode="contain"
            />
            
        </View>
    </TouchableOpacity>);
};

const styles = StyleSheet.create({
    container: {
        width: '50%',
        padding: 5,
        height: Dimensions.get('window').width / 2,
    },
    card: {
        flex: 1,
        borderWidth: 1,

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

export default AddCard;