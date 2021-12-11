import firebase from '../services/firebaseConnection';
import { Alert } from 'react-native';



export const USER_LOGIN_SUCESSO = 'USER_LOGIN';
const userLogin_Sucesso = user => ({
  type: USER_LOGIN_SUCESSO,
  user
});

//acesso login (podendo ou não criar uma conta)
export const acessoLogin = ({ email, password }) => dispatch => {

  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      let uid = user.user.uid;
      return firebase
        .database()
        .ref('users')
        .child(uid)
        .once('value')
        .then((snapshot) => {
          let user = {
            uid,
            nome_completo: snapshot.val().nome_completo,
            email: snapshot.val().email,
            apartamento: snapshot.val().apartamento
          };
          const action = userLogin_Sucesso(user)
          dispatch(action);
          return user;
        });
    })
    .catch(error => {
      alert(error)
      if (error.code == "auth/user-not-found") {
        return new Promise((resolve, reject) => {
          Alert.alert(
            "Usuário não encontrado",
            "Deseja criar um novo usuário?",
            [{
              text: 'Não',
              onPress: () => {
                resolve();
              }
            }, {
              text: 'Sim',
              onPress: () => {
                firebase
                  .auth()
                  .createUserWithEmailAndPassword(email, password)
                  .then(resolve)
                  .catch(reject)
              }
            }],
            { cancelable: true }
          );
        })
      }
      return Promise.reject(error);
    })
}


//Novo

//Criação de usuário 
export const inscrever = (email = '', password = '', nome_completo = '', apartamento = '') => dispatch => {
  return new Promise((resolve, reject) => {
    if (email === '' || password === '') {
      Alert.alert(
        'Campos obrigatórios',
        'Informe os dados para realizar o cadastro'
      );
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((value) => {
          let uid = value.user.uid;
          firebase
            .database()
            .ref('users')
            .child(uid)
            .set({ nome_completo, apartamento, email: value.user.email })
            .then(() => {
              let user = {
                uid,
                nome_completo,
                apartamento,
                email: value.user.email,
              };
              const action = userLogin_Sucesso(user)
              dispatch(action);
              resolve(user);
            });
        })
        .catch((error) => {
          Alert.alert('Falha ao realizar cadastro');
          reject(error)
        });
    }
  })

}

export const signIn = async (email = '', password = '') => {
  if (email === '' || password === '') {
    Alert.alert(
      'Campos obrigatórios',
      'Informe os dados para realizar login'
    );
  } else {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;
        await firebase
          .database()
          .ref('users')
          .child(uid)
          .once('value')
          .then((snapshot) => {
            let data = {
              uid,
              nome_completo: snapshot.val().nome_completo,
              email: value.user.email,
              apartamento: snapshot.val().apartamento
            };
            storageUser({ data });
          });
      })
      .catch((error) => {
        Alert.alert('Falha ao realizar login')
      })
  }
}

export const currentUser = () => dispatch => {
  var user = firebase.auth().currentUser;

  if (user) {
    if (user != null) {
      return ({
        user: {
          nome_completo: user.nome_completo,
          email: user.email,
          id: user.uid,
        }
      })
    }
  }
}


