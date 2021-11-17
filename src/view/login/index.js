import * as React from 'react';
import { View, 
         Text, 
         Button, 
         StyleSheet, 
         ActivityIndicator, 
         Alert
        } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import FormRow from '../../components/FormRow/FormRow';
import firebase from '../../services/firebaseConnection';
// import firebase from '@react-native-firebase/app';
// import auth from "@react-native-firebase/auth";




export default class Login extends React.Component {

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

        const loginUserSuccess = user =>{
            this.setState({message: "Sucesso!"});
            this.props.navigation.navigate('Home', {user: user});  //verificar se entra
        }
        const loginUserFaill = error =>{
            this.setState({message: this.getMessageByError(error.code)});
        }

        firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(loginUserSuccess)
        .catch(error => {
            alert (error)
            if(error.cod == "auth/user-not-found"){
                Alert.alert(
                    "Usuário não encontrado", //titulo do alerta
                    "Deseja criar um novo usuário?", //msg do alerta
                    [    //array de objs
                        {
                        text: 'Não',
                        onPress: () => {
                            console.log('Usuário não deseja nova conta')
                        }
                        },
                        {
                        text: 'Sim',
                        onPress: ()=> {
                            firebase
                                .auth()
                                .createUserWithEmailAndPassword(email, password)
                                .then(loginUserSuccess)
                                .catch(loginUserFaill)
                        }
                        },
                    ],
                    {cancelable: true}
                );
            }
            loginUserFaill
        })
        .then(() => {
            this.setState({isLoading: false});
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
                <FormRow>
                    <TextInput
                        style={styles.textInput}
                        placeholder="E-mail"
                        value={this.state.email}
                        onChangeText={valor => {
                            this.onChangeHandler('email', valor)
                        }}
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