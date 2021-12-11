import * as React from 'react';
import { View, 
         Text,  
         Button, 
         StyleSheet, 
         ScrollView, 
         FlatList } from 'react-native';
import HeaderDrawNav from '../../components/headerDrawNav/headerDrawNav';
import { watchReservas } from '../../actions/reservasActions'
import { connect } from 'react-redux';

const isLeft = num => num % 2 === 0;



class Reserva extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.watchReservas();
    }

    render() {



        return (
            <ScrollView style={styles.view}>

                <HeaderDrawNav title='Reservas' navigation={this.props.navigation} />

                <View style={styles.view}>

                    <View style={styles.texto}>
                        <Text style={styles.txt}>Clique em uma data de reserva</Text>
                        <Text style={styles.txt}>_____________________________________</Text>
                    </View>


                    {this.props.reservas !== null && <FlatList
                        data={[...this.props.reservas, { isLast: true }]}
                        renderItem={({ item }) =>
                            <Text
                                onPress={() => this.props.navigation.navigate('reservaDetalhe', { reserva: item })} style={styles.item}>{item.data}</Text>}

                        keyExtractor={item => item.id}
                    />
                    }

                    <View style={styles.btn}>
                        <Button
                            color='#BD89EB'
                            title="Nova reserva"
                            onPress={() => this.props.navigation.navigate('novaReservaScreen')}
                        />
                    </View>

                </View>

            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    const { listaReservas } = state;

    if (listaReservas === null) {
        return { reservas: listaReservas };
    }

    const keys = Object.keys(listaReservas);
    const listaReservasComId = keys.map(key => {
        return { ...listaReservas[key], id: key }
    })

    return { reservas: listaReservasComId };
}

export default connect(
    mapStateToProps,
    { watchReservas }
)(Reserva)

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },

    view: {
        backgroundColor: '#B15CFC',
    },

    txt: {
        fontSize: 18,
        paddingTop: 10,
        flex: 1,
        textAlign: 'center',
        color: "#ece1e1",
    },

    texto: {
        padding: 15,
    },

    btn: {
        alignSelf: 'center',
        flex: 0,
        width: 150,
        borderRadius: 5
    }

});
