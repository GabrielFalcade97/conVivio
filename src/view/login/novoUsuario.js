import * as React from 'react';
import { View, 
         Text, 
         Button, 
         StyleSheet, 
         ActivityIndicator, 
        } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import FormRow from '../../components/FormRow/FormRow';


export default class novoUsuario extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <View>

                <Text>Novo usuário</Text>
 

                <FormRow>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Nome completo"
                    />
                </FormRow>

                <FormRow>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Apartamento"
                    />
                </FormRow>

                <FormRow>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                    />
                </FormRow>

                <FormRow>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Senha"
                    />
                </FormRow>

                <FormRow>
                    <TextInput
                        style={styles.textInput}
                        placeholder="confirmar Senha"
                    />
                </FormRow>

                <Button title="CRIAR CONTA" />

            </View>    
        )
    }
}