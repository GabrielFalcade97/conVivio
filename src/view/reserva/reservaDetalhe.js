import React from "react";
import {
        ScrollView,
        StyleSheet,
        Button,
        View,
        Text } from "react-native";
import HeaderDrawNav from "../../components/headerDrawNav/headerDrawNav";
import { connect } from 'react-redux';
import { cancelReserva } from '../../actions'


class reservaDetalhe extends React.Component {
    render() {
        const { reserva } = this.props.route.params;

        return (

            <>
                <HeaderDrawNav title='Detalhes da reserva' navigation={this.props.navigation} />

                <ScrollView style={styles.scrollview}>

                    <View style={styles.infos}>
                        <Text style={styles.campos}>Nome do morador</Text>
                        <Text style={styles.txt}>{reserva.morador}</Text>

                        <Text style={styles.campos}>Ambiente reservado</Text>
                        <Text style={styles.txt}> {reserva.ambiente}</Text>

                        <Text style={styles.campos}>Data da reserva</Text>
                        <Text style={styles.txt}> {reserva.data}</Text>
                    </View>


                    <View style={styles.button}>
                        <Button
                            title="Cancelar"
                            color="#FF0004"
                            onPress={async () => {
                                const deleta = await this.props.cancelReserva(reserva)

                                if (deleta) {
                                    this.props.navigation.goBack();
                                }
                            }}
                        />
                    </View>

                </ScrollView>
            </>

        )
    }
}

const styles = StyleSheet.create({

    button: {
        margin: 10,
        width: 150,
        flex: 0,
        alignSelf: 'center',
        borderRadius: 5,
        paddingTop: 50,
    },

    txt: {
        color: "black",
        fontFamily: 'Roboto',
        fontSize: 25,
        textAlign: "center",
        paddingTop: 5
    },

    scrollview: {
        backgroundColor: '#B15CFC',
        alignContent: 'center',
        paddingTop: 35
    },

    infos: {
        backgroundColor: "#ece1e1",
        width: '75%',
        alignSelf: 'center',
    },

    campos: {
        color: "black",
        fontFamily: 'Roboto',
        fontSize: 18,
        textAlign: "center",
        paddingTop: 5,
    }
});


export default connect(null, { cancelReserva })(reservaDetalhe);
