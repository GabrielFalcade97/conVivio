import { Alert } from "react-native";
import firebase from "../services/firebaseConnection"

export const SET_AMBIENTES = 'SET_AMBIENTES';

const setAmbientes = ambientes => ({
    type: SET_AMBIENTES,
    ambientes: ambientes
})

export const watchAmbientes = () => {
    return dispatch => {
        firebase
            .database()
            .ref(`/ambientes`)
            .on('value', snapshot => {
                const ambientes = snapshot.val();
                const action = setAmbientes(ambientes);
                dispatch(action);
            })
    }
}

export const deleteAmbiente = ambiente => {

    return dispatch => {
        return new Promise((resolve, reject) => {
            Alert.alert("Excluir",
                `Deseja excluir o ambiente ${ambiente.title}?`,
                [{
                    text: 'Não',
                    onPress: () => {
                        resolve(false);
                    },
                    style: 'cancel'
                }, {
                    text: 'Sim',
                    onPress: async () => {
                        const { currentUser } = firebase.auth();

                        try {
                            await firebase
                                .database()
                                .ref(`/users/${currentUser.uid}/ambientes/${ambiente.id}`)
                                .remove();

                            resolve(true);
                        } catch (e) {
                            reject(e);
                        }
                    }
                }
                ],
                { cancelable: false }
            )
        })
    }
}

