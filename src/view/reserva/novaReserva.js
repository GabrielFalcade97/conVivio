import React from 'react';
import FormRow from '../../components/FormRow/FormRow';
import HeaderDrawNav from '../../components/headerDrawNav/headerDrawNav';
import { ScrollView, Button, TextInput } from 'react-native';

export default class novaReservaScreen extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <ScrollView>
                
                <HeaderDrawNav title='Informações' navigation={this.props.navigation}/>

                <FormRow>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Data do evento ex: 00/00/0000"
                        value={ambienteForm.title}
                        onChangeText={value => setField('title', value)}
                    />    
                </FormRow>

                <Text>Colocar alguma coisa pro ambiente</Text>

                <Button
                    title='Salvar'
                />

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
