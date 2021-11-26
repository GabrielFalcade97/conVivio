import React from "react";
import { StyleSheet, 
         ScrollView, 
         TextInput, 
         Button,
         ActivityIndicator,
         Alert } from "react-native";

import FormRow from "../../components/FormRow/FormRow";
import { connect } from "react-redux";
import { setField, saveAmbiente } from "../../actions";

class NovoAmbienteScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        }
    }


    render(){
        const {ambienteForm, setField, saveAmbiente, navigation} = this.props;

        return(
            <ScrollView style={styles.viewcontainer}>
                <FormRow>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Título"
                        value={ambienteForm.title}
                        onChangeText={value => setField('title', value)}
                    />    
                </FormRow>

                <FormRow>
                    <TextInput
                        style={styles.textinput}
                        placeholder="URL da imagem"
                        value={ambienteForm.img}
                        onChangeText={value => setField('img', value)}
                    />
                </FormRow>

                <FormRow>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Lotação"
                        value={ambienteForm.lotacao}
                        onChangeText={value => setField('lotacao', value)}
                    />
                </FormRow>

                <FormRow>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Descrição"
                        value={ambienteForm.descricao}
                        onChangeText={value => setField('descricao', value)}
                        numberOfLines={5}
                        multiline={true}
                    />
                </FormRow>

                {
                    this.state.isLoading ?
                        <ActivityIndicator />
                        :
                        <Button
                            title="Salvar"
                            onPress={async () =>{
                                this.setState({ isLoading: true })

                                try{
                                    await saveAmbiente(ambienteForm);
                                    navigation.goBack();
                                }catch (error){
                                    Alert.alert('Erro', error.message);
                                } finally{
                                    this.setState({ isLoading: false });
                                }

                                }}/>
                }
                
            </ScrollView>
        );
    }



}



const styles = StyleSheet.create({
    textinput: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom:5,
    },
    viewcontainer: {
        paddingTop: 15, 
    }
});

const mapStateToProps = (state) => {
    return({
        ambienteForm: state.ambienteForm
    })
    
}

const mapDispatchToProps = {
    setField,
    saveAmbiente
}


export default connect(mapStateToProps, mapDispatchToProps) (NovoAmbienteScreen);