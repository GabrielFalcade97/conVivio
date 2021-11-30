import { Alert } from "react-native";
import firebase from "../services/firebaseConnection";

export const SET_RESERVAS = 'SET_RESERVAS';

const setReservas = reservas => ({
    type: SET_RESERVAS,
    reservas: reservas
})

export const watchReservas = () => {
    const { currentUser } = firebase.auth();

    return dispatch => {
        firebase
            .database()
            .ref(`users/${currentUser.uid}/reservas`)
            .on('value', snapshot => {
                const reservas = snapshot.val();
                const action = setReservas(reservas);
                dipatch(action);
            })
    }
}

export const cancelReserva = reserva => {

    return dispatch => {
        return new Promise((resolve, reject) => {
            Alert.alert("Cancelar",
                'Deseja cancelar essa reserva?',
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
                                .ref(`/users/${currentUser.uid}/reservas/${reserva.id}`)
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