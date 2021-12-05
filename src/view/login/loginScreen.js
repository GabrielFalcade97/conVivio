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
import { acessoLogin} from '../../actions';



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
            <View style={styles.buttonEntrar}>
                <Button 
                    color='#BD89EB'
                    title="ENTRAR" 
                    onPress={() => this.acessoLogin()} />
            </View>
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
            <View style={styles.viewLog}>
                <Text style={styles.textPrinc}>ConVívio</Text>
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

                <View style={styles.button}>
                    <Button 
                    title="CRIAR CONTA"
                    color='#BD89EB'
                    onPress={() => this.props.navigation.navigate('novoUsuario')} />
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        fontFamily: 'Roboto',
        color: '#000000',
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        height: 40,
        margin: 0,
        alignItems: 'center',
        borderRadius: 5,
        
        
    },

    textPrinc: {
        fontFamily: 'Roboto',
        color: '#ece1e1',
        fontSize: 65,
        textAlign: 'center',
        paddingTop: 45,
        paddingBottom: 25
        
    },
    
    viewLog: {
        backgroundColor: '#B15CFC',
    },

    button: {
        padding: 20,
        height: '100%',
        paddinngTop: 10,
        paddingBottom: 10,
        paddingLeft: 5.5,
        paddingRight: 5.5,
        alignItems: 'center',
        borderRadius: 8,
        paddingTop: 45,
        alignItems: 'center',
        
    },

    buttonEntrar: {
        padding: 10,
        paddinngTop: 10,
        paddingBottom: 10,
        paddingLeft: 5.5,
        paddingRight: 5.5,
        alignItems: 'center',
        borderRadius: 8,
        paddingTop: 45,
        
        
    },

    
    

})

export default connect(null, {acessoLogin})(Login);