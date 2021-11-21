import firebase from '../services/firebaseConnection';
import { Alert } from 'react-native';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN';
const userLogin_Success = user => ({
    type: USER_LOGIN_SUCCESS,
    user
});

const USER_LOGOUT = 'USER_LOGOUT'
const userLogout = () => ({
    type: USER_LOGOUT,
});

export const acessoLogin = ({email, password}) => dispatch =>{

    return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
        const action = userLogin_Success(user)
        dispatch(action);
        return user;
    })
    .catch(error => {
        alert (error)
        if(error.code == "auth/user-not-found") {
            return new Promise((resolve, reject) => {
              Alert.alert(
                "Usuário não encontrado",
                "Deseja criar um novo usuário?",
                [{
                  text: 'Não',
                  onPress: () => {
                    resolve();
                  }
                },{
                  text: 'Sim',
                  onPress: () => {
                    firebase
                      .auth()
                      .createUserWithEmailAndPassword(email, password)
                      .then(resolve)
                      .catch(reject)
                  }
                }],
                        {cancelable: true}
                    );
            })   
        }
        return Promise.reject(error);
    })
}