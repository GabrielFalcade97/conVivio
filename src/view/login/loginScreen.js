import * as React from 'react';
import { View, 
         Text, 
         Button, 
         StyleSheet, 
         ActivityIndicator, 
        } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import FormRow from '../../components/FormRow/FormRow';
import {connect} from 'react-redux';


import { acessoLogin } from '../../actions';


class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            isLoading: false,
            message: "",
        }
    }


    onChangeHandler(field, valor){
        this.setState({
            [field]:valor
        })
    }

    acessoLogin(){ 
        this.setState({ isLoading: true });
        const{email, password} = this.state;  

        this.props.acessoLogin({email, password})
         .then( user => {
             if(user){
                this.setState({
                    isLoading: false,
                    message: ''})
            this.props.navigation.navigate('Menu');
            } else {
                this.setState({
                    isLoading: false,
                    message: '',
                })
            }  
         })
         .catch(error => {
            this.setState({
                isLoading: false,
                message: this.getMessageByError(error.code)
                });
         })
    }

    getMessageByError(code){
        switch(code){
            case "auth/user-not-found":
                return "E-mail não cadastrado.";
            case "auth/wrong-password":    
                return "Senha incorreta.";
            default:
                return "Erro desconhecido";    
        }
    }

    renderButton(){
        if(this.state.isLoading)
            return <ActivityIndicator />    
        return(
            <Button 
                title="ENTRAR" 
                onPress={() => this.acessoLogin()} />
        )
    }

    renderMessage(){
        const {message} = this.state;

        if(!message)
            return null;

        return(
            <View>
                <Text>{message}</Text>
            </View>
        )    
    }


    render() {
        return (
            <View>
                <Text>ConVivio</Text>
                <FormRow>
                    <TextInput
                        style={styles.textInput}
                        placeholder="E-mail"
                        value={this.state.email}
                        onChangeText={valor => {
                            this.onChangeHandler('email', valor)
                        }}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </FormRow>

                <FormRow>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Senha"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={valor => {
                            this.onChangeHandler('password', valor)
                        }}
                    />
                </FormRow>
                {this.renderButton()}
                {this.renderMessage()}

                <Text>-------------------------------------------------------</Text>
                <Button title="CRIAR CONTA" />

            </View>

        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        fontFamily: 'Roboto',
        color: 'black',
        borderWidth: 1,
        borderColor: 'gray',
        paddingLeft: 10,
        paddingRight: 10,
    }
})

export default connect(null, {acessoLogin})(Login);