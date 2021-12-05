import React from 'react';
import FormRow from '../../components/FormRow/FormRow';
import HeaderDrawNav from '../../components/headerDrawNav/headerDrawNav';
import { ScrollView, Button, TextInput, ActivityIndicator, Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { connect } from 'react-redux';
import { setFieldRes, saveReserva, setAllFieldsRes } from '../../actions/novaReservaFormActions';
import { StyleSheet } from 'react-native'
import {watchAmbientes} from '../../actions/ambientesActions'

class novaReservaScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            selectedAmbiente: "",
        }
    }
    componentDidMount(){
        this.props.watchAmbientes();
    }


    render() {

        const { reservaForm, setFieldRes, saveReserva, ambientes, navigation } = this.props
      
        return (
            <ScrollView>

                <HeaderDrawNav title='Informações' navigation={this.props.navigation} />

                <FormRow>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Data do evento ex: 00/00/0000"
                        value={reservaForm.data}
                        onChangeText={value => setFieldRes('data', value)}
                    />
                </FormRow>

                <FormRow>
                    <Picker
                    selectedValue={this.state.selectedAmbiente}
                    onValueChange={(itemValue, itemIndex) => this.setState({selectedAmbiente:itemValue})}>

                    {
                        ambientes ? 
                        ambientes.map((a, i)=> {
                            
                            var x = JSON.parse(JSON.stringify(a))

                            return(
                                <Picker.Item key={i} label={x.title} value={x.title}/>
                            )
                        })
                        :
                        null
                    }
                    
                    </Picker>
                </FormRow>

                <FormRow>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Nome morador"
                        value={reservaForm.morador}
                        onChangeText={value => setFieldRes('morador', value)}
                    />
                </FormRow>

                {
                    this.state.isLoading ?
                        <ActivityIndicator />
                        :
                        <Button
                            title='Salvar'
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
                }

            </ScrollView>
        )

    }

}

const styles = StyleSheet.create({
    textinput: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
    },
});

const mapStateToProps = (state) => {
    return ({
        reservaForm: state.reservaForm,
        ambientes: state.listaAmbientes
    })
}

const mapDispatchToProps = {
    setFieldRes,
    saveReserva,
    setAllFieldsRes,
    watchAmbientes
}

export default connect(mapStateToProps, mapDispatchToProps)(novaReservaScreen);
