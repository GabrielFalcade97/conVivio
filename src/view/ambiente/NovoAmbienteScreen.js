import React from "react";
import {
        StyleSheet,
        ScrollView,
        TextInput,
        Button,
        ActivityIndicator,
        Alert,
        View,
        Image,
        TouchableOpacity,
        PermissionsAndroid,
        Text} from "react-native";

import FormRow from "../../components/FormRow/FormRow";
import { connect } from "react-redux";
import { setField, saveAmbiente, setAllFields, resetaForm } from "../../actions";
import HeaderDrawNav from "../../components/headerDrawNav/headerDrawNav";
import { RNCamera } from 'react-native-camera';
import CameraRollPicker from 'react-native-camera-roll-picker';
import ImgToBase64 from 'react-native-image-base64';


class NovoAmbienteScreen extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            isCamera: false,
            isCameraRoll: false,
        }
    }

    componentDidMount() {
        const { route, setAllFields, resetaForm } = this.props;
        const { params } = route;

        if (params && params.ambienteToEdit) {
            setAllFields(params.ambienteToEdit)
        } else {
            resetaForm();
        }


    }

    viewGaleria() { //acessa galeria 
        this.requestExternalStorageAccess();

        return (
            <CameraRollPicker
                maximum={1}
                selectSingleItem={true}
                callback={(volta) => {

                    if (volta.length > 0) {
                        ImgToBase64.getBase64String(volta[0].uri)
                            .then(stringConvertida => {
                                this.props.setField('img', stringConvertida)
                            })
                            .catch(err => {
                                console.log(err)
                            })
                    }

                    this.setState({
                        isCameraRoll: false,
                    })
                }}
            />

        );
    }

    async requestExternalStorageAccess() { //permissões de acesso
        try {
            const permissao = await PermissionsAndroid
                .request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);

            if (permissao !== PermissionsAndroid.RESULTS.GRANTED) {
                Alert.alert('Permissão negada');
            }
        } catch (err) {
            console.log(err);
        }
    }

    viewCamera() {
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                        title: 'Permissão para usar câmera',
                        message: 'Precisamos de autorização para utilizar a câmera',
                        buttonPositive: 'Aceito',
                        buttonNegative: 'Cancelar'
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permissão para gravar',
                        message: 'Precisamos de autorização para gravar áudio',
                        buttonPositive: 'Aceito',
                        buttonNegative: 'Cancelar'
                    }}
                />

                <View>
                    <TouchableOpacity
                        style={styles.captura}
                        onPress={this.capturarFoto.bind(this)}>

                        <Text>Tirar foto</Text>

                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    capturarFoto = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true, forceUpOrientation: true, fixOrientation: true };
            const data = await this.camera.takePictureAsync(options);

            if (data) {
                this.props.setField('img', data.base64);

                this.setState({
                    isCamera: false
                })
            }
        }
    }

    _goback() {
        const { goBack } = this.props.navigation;
        goBack();
        setTimeout(function () { goBack() }, 500);
    }

    viewForm() {
        const { ambienteForm, setField, saveAmbiente, navigation } = this.props;

        return (

            <ScrollView style={styles.viewcontainer}>

                <HeaderDrawNav title='Informações' navigation={this.props.navigation} />

                <FormRow>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Título"
                        value={ambienteForm.title}
                        onChangeText={value => setField('title', value)}
                    />
                </FormRow>

                <FormRow>
                    {
                        ambienteForm.img ?
                            <Image
                                source={{ uri: `data:image/jpeg;base64,${ambienteForm.img}` }}
                                style={styles.img}
                            />
                            : null
                    }

                    <View style={{ paddingTop: 5, flex: 0, width: 150, alignSelf: 'center', borderRadius: 5 }}>
                        <Button
                            title='Capturar imagem'
                            color='#BD89EB'
                            onPress={() => {
                                Alert.alert(
                                    'Captura de imagem',
                                    'De onde quer a imagem?',
                                    [
                                        {
                                            text: 'Câmera',
                                            onPress: () => {
                                                this.setState({
                                                    isCamera: true
                                                })
                                            }
                                        },
                                        {
                                            text: 'Galeria',
                                            onPress: () => {
                                                this.setState({
                                                    isCameraRoll: true
                                                })
                                            }
                                        }
                                    ]
                                )
                            }}
                        />
                    </View>
                </FormRow>

                <FormRow>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Lotação"
                        value={ambienteForm.lotacao}
                        onChangeText={value => setField('lotacao', value)}
                    />
                </FormRow>

                <FormRow>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Descrição"
                        value={ambienteForm.descricao}
                        onChangeText={value => setField('descricao', value)}
                        numberOfLines={5}
                        multiline={true}
                    />
                </FormRow>

                {
                    this.state.isLoading ?
                        <ActivityIndicator />
                        :
                        <View style={styles.button}>
                            <Button
                                title="Salvar"
                                color='#BD89EB'
                                onPress={async () => {
                                    this.setState({ isLoading: true })

                                    try {
                                        await saveAmbiente(ambienteForm);
                                        this._goback()
                                    } catch (error) {
                                        Alert.alert('Erro', error.message);
                                    } finally {
                                        this.setState({ isLoading: false });
                                    }

                                }} />
                        </View>
                }

            </ScrollView>

        );
    }


    render() {

        if (this.state.isCameraRoll) {
            return (this.viewGaleria())
        }

        if (this.state.isCamera) {
            return (this.viewCamera())
        }

        return (this.viewForm())
    }

}



const styles = StyleSheet.create({
    textinput: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
    },
    viewcontainer: {
        backgroundColor: '#B15CFC',

    },
    img: {
        aspectRatio: 1,
        width: '100%',
    },
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: 'black'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItens: 'center',
    },
    captura: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },

    button: {
        borderRadius: 5,
        alignSelf: 'center',
        flex: 0,
        width: 250,
        paddingTop: 30
    }
});



const mapStateToProps = (state) => {
    return ({
        ambienteForm: state.ambienteForm
    })

}

const mapDispatchToProps = {
    setField,
    saveAmbiente,
    setAllFields,
    resetaForm,
}


export default connect(mapStateToProps, mapDispatchToProps)(NovoAmbienteScreen);