import * as React from 'react';
import {
        View,
        Text,
        Button,
        StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { inscrever } from '../../actions';
import FormRow from '../../components/FormRow/FormRow';
import { connect } from 'react-redux'


class novoUsuario extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            nome_completo: "",
            apartamento: "",
            isLoading: false,
            message: ""
        }
    }

    getMessageByError(code) {
        switch (code) {
            case "auth/user-not-found":
                return "E-mail não cadastrado.";
            case "auth/wrong-password":
                return "Senha incorreta.";
            default:
                return "Erro desconhecido";
        }
    }

    cadastro() {
        this.setState({ isLoading: false });
        const { email, password, apartamento, nome_completo } = this.state;
        const { navigate } = this.props.navigation
        this.props.inscrever(email, password, apartamento, nome_completo)
            .then(user => {
                if (user) {
                    this.setState({
                        isLoading: false,
                        message: ''
                    })
                    navigate('Menu');
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

                });
            })
    }


    render() {
        const { email, password, nome_completo, apartamento } = this.state
        return (
            <View style={styles.view}>

                <Text style={styles.text}>Novo usuário</Text>


                <FormRow>
                    <Text style={styles.textInfo}>Nome completo</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Nome completo"
                        value={nome_completo}
                        onChangeText={value => this.setState({ nome_completo: value })}
                    />
                </FormRow>



                <FormRow>
                    <Text style={styles.textInfo}>Apartamento</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Apartamento"
                        value={apartamento}
                        onChangeText={value => this.setState({ apartamento: value })}
                    />
                </FormRow>



                <FormRow>
                    <Text style={styles.textInfo}>Email</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        value={email}
                        keyboardType="email-address"
                        autoCapitalize='none'
                        onChangeText={value => this.setState({ email: value })}
                    />
                </FormRow>



                <FormRow>

                    <Text style={styles.textInfo}>Senha</Text>

                    <TextInput
                        style={styles.textInput}
                        placeholder="Senha"
                        value={password}
                        secureTextEntry
                        onChangeText={value => this.setState({ password: value })}
                    />
                </FormRow>


                <View style={styles.button}>
                    <Button title="Salvar"
                        onPress={() => this.cadastro()}
                        color='#BD89EB'
                    />
                </View>

            </View>
        )
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

    view: {
        backgroundColor: '#B15CFC',
        width: '100%',
        height: '100%',
    },

    text: {
        fontSize: 35,
        color: '#ece1e1',
        textAlign: 'center',
        padding: 30
    },

    button: {
        paddingTop: 50,
        alignSelf: 'center',
        flex: 0,
        width: 250,
        borderRadius: 5
    },

    textInfo: {
        fontFamily: 'Roboto',
        fontSize: 15,
        color: 'black',

    },

    viewForm: {
        backgroundColor: '#B15CFC'
    },
})

export default connect(null, { inscrever })(novoUsuario);