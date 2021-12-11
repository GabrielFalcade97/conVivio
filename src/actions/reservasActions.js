import { Alert } from "react-native";
import firebase from "../services/firebaseConnection";

export const SET_RESERVAS = 'SET_RESERVAS';

const setReservas = reservas => ({
    type: SET_RESERVAS,
    reservas: reservas
})

//mostra a lista de reservas
export const watchReservas = () => {
    const { currentUser } = firebase.auth();

    if (currentUser.email === "admin@admin.com") {
        return dispatch => {
            firebase
                .database()
                .ref(`users`)
                .on("value", function (snapshot) {
                    var reservas = { type: SET_RESERVAS, reservas: {} };
                    snapshot.forEach(function (childSnapshot) {
                        var childData = childSnapshot.val();
                        if (childData.reservas) {
                            Object.assign(reservas.reservas, childData.reservas)
                        }
                    });
                    const action = setReservas(reservas);
                    dispatch(reservas);
                });
        }
    }

    return dispatch => {
        firebase
            .database()
            .ref(`users/${currentUser.uid}/reservas`)
            .on('value', snapshot => {
                const reservas = snapshot.val();
                const action = setReservas(reservas);
                dispatch(action);
            })
    }
}

//faz o cancelamento de reservas
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