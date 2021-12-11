import React from 'react';
import FormRow from '../../components/FormRow/FormRow';
import HeaderDrawNav from '../../components/headerDrawNav/headerDrawNav';
import { ScrollView, 
         View, 
         Button, 
         TextInput, 
         ActivityIndicator, 
         Alert, 
         Text } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import { connect } from 'react-redux';
import { setFieldRes, saveReserva, setAllFieldsRes, resetaFormRes } from '../../actions/novaReservaFormActions';
import { StyleSheet } from 'react-native'
import { watchAmbientes } from '../../actions/ambientesActions'
import { currentUser } from '../../actions';


class novaReservaScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            selectedAmbiente: "",
        }


    }
    componentDidMount() {
        this.props.watchAmbientes();

        const { route, setAllFieldsRes, resetaFormRes } = this.props;
        const { params } = route;

        if (params && params.reservaToEdit) {
            setAllFieldsRes(params.reservaToEdit)
        } else {
            resetaFormRes();
        }
    }


    render() {

        const { reservaForm, setFieldRes, saveReserva, ambientes, navigation } = this.props

        return (
            <ScrollView style={styles.form}>

                <HeaderDrawNav title='Informações' navigation={this.props.navigation} />

                <Text style={styles.txt}>Informe a data da reserva</Text>
                <FormRow>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Data do evento ex: 00/00/0000"
                        value={reservaForm.data}
                        onChangeText={value => setFieldRes('data', value)}
                    />
                </FormRow>

                <Text style={styles.txt}>Selecione um ambiente</Text>
                <FormRow>
                    <Picker
                        selectedValue={this.state.selectedAmbiente}
                        onValueChange={
                            (value, itemIndex) => {
                                this.setState({ selectedAmbiente: value });
                                setFieldRes('ambiente', value)
                            }}>
                        {
                            ambientes ?
                                ambientes.map((a, i) => {

                                    var x = JSON.parse(JSON.stringify(a))

                                    return (
                                        <Picker.Item key={i} label={x.title} value={x.title} />
                                    )
                                })
                                :
                                null
                        }
                    </Picker>

                </FormRow>

                <Text style={styles.txt}>Seu email</Text>
                <FormRow>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Email morador"
                        value={this.props.currentUser().user.email}
                        onChangeText={value => setFieldRes('morador', value)}
                    />
                </FormRow>

                {
                    this.state.isLoading ?
                        <ActivityIndicator />
                        :
                        <View style={styles.btn}>
                            <Button
                                title='Salvar'
                                color='#BD89EB'
                                onPress={async () => {
                                    this.setState({ isLoading: true })
                                    try {
                                        await saveReserva(reservaForm);
                                        navigation.goBack();
                                    } catch (erro) {
                                        Alert.alert('Erro', erro.mesage);
                                    } finally {
                                        this.setState({ isLoading: false });
                                    }
                                }} />
                        </View>
                }

            </ScrollView>
        )

    }

}


const mapStateToProps = (state) => {


    const { listaAmbientes } = state;

    if (listaAmbientes === null) {
        return ({
            reservaForm: state.reservaForm,
            ambientes: listaAmbientes
        })
    }

    const keys = Object.keys(listaAmbientes);
    const listaAmbientesComId = keys.map(key => {
        return { ...listaAmbientes[key], id: key }
    })

    return ({
        reservaForm: state.reservaForm,
        ambientes: listaAmbientesComId
    })
}

const mapDispatchToProps = {
    setFieldRes,
    saveReserva,
    setAllFieldsRes,
    resetaFormRes,
    watchAmbientes,
    currentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(novaReservaScreen);


const styles = StyleSheet.create({
    textinput: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
        fontFamily: 'Roboto',
        color: '#000000',
        borderWidth: 1,
        borderColor: 'gray',
        height: 40,
        margin: 0,
        alignItems: 'center',
        borderRadius: 5,
    },

    form: {
        backgroundColor: '#B15CFC',
    },

    txt: {
        color: "#ece1e1",
        fontFamily: 'Roboto',
        fontSize: 20,
        paddingTop: 5,
        margin: 5
    },

    btn: {
        padding: 20,
        height: '100%',
        paddinngTop: 10,
        paddingBottom: 10,
        paddingLeft: 5.5,
        paddingRight: 5.5,
        borderRadius: 8,
        paddingTop: 45,
        alignSelf: 'center',
        flex: 0,
        width: 250,
        borderRadius: 5
    }
});