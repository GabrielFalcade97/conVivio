import React from 'react';
import FormRow from '../../components/FormRow/FormRow';
import HeaderDrawNav from '../../components/headerDrawNav/headerDrawNav';
import { ScrollView, Button, TextInput, ActivityIndicator, Alert, Piker} from 'react-native';
import { connect } from 'react-redux';
import { setField, saveReserva, setAllFieldsRes } from '../../actions/novaReservaFormActions';

class novaReservaScreen extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: false,
        }
    }

    render(){
        return(
            <ScrollView>
                
                <HeaderDrawNav title='Informações' navigation={this.props.navigation}/>

                <FormRow>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Data do evento ex: 00/00/0000"
                        value={reservaForm.data}
                        onChangeText={value => setField('title', value)}
                    />    
                </FormRow>

                <FormRow>
                    <Piker.Item label="Ambiente 1"/> 
                    <Piker.Item label="Ambiente 2"/>
                    <Piker.Item label="Ambiente 3"/>  
                </FormRow>

                <FormRow>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Nome morador"
                        value={reservaForm.morador}
                        onChangeText={value => setField('title', value)}
                    />    
                </FormRow>

                {
                    this.state.isLoading ?
                    <ActivityIndicator />
                    : 
                    <Button
                        title='Salvar'
                        onPress={async () =>{
                            this.setState({isLoading: true})

                            try{
                                await saveReserva(reservaForm);
                                navigation.goBack();
                            }catch (erro){
                                Alert.alert('Erro', erro.mesage);
                            } finally{
                                this.setState({isLoading: false});
                            }
                        }}/>
                }

            </ScrollView>
        )

    }

}

const styles = StyleSheet.create({
    textinput: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom:5,
    },
});

const mapStateToProps = (state) => {
    return({
        reservaForm: state.reservaForm
    })
}

const mapDispatchToProps = {
    setField,
    saveReserva,
    setAllFieldsRes,
}

export default connect(mapStateToProps, mapDispatchToProps)(novaReservaScreen);
