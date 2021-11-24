import React from "react";
import { StyleSheet, 
         ScrollView, 
         TextInput, 
         Button } from "react-native";

import FormRow from "../../components/FormRow/FormRow";
import { connect } from "react-redux";
import { setField, saveAmbiente } from "../../actions";

const NovoAmbienteScreen = ({ambienteForm, setField, saveAmbiente}) => (
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

        <Button
            title="Salvar"
            onPress={() =>{
                saveAmbiente(ambienteForm);
            }}/>

    </ScrollView>

);



const styles = StyleSheet.create({
    textinput: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom:5,
    },
    viewcontainer: {
        paddingTop: 15, //ver essa view e tentar colocar header
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