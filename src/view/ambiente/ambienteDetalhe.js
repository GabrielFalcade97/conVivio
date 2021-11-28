import React from "react";
import { ScrollView,  
         Image,
         StyleSheet, 
         Button, 
         View} from "react-native";
import Line from '../../components/Line/Line';
import LongText from "../../components/LongText/LongText";
import HeaderDrawNav from "../../components/headerDrawNav/headerDrawNav";
import { connect } from "react-redux";
import { deleteAmbiente } from "../../actions";

class AmbienteDetalhe extends React.Component{
    render(){
         const {ambiente} = this.props.route.params;
         
        return(
            <>
            <HeaderDrawNav title={ambiente.title} navigation={this.props.navigation}/>
        
            <ScrollView>

                <Image
                 source={{
                     uri: `data:image/jpeg;base64,${ambiente.img}`
                 }}
                 style={styles.image}
                 />

                <Line label="Título" content={ambiente.title}/>
                <Line label="Lotação" content={ambiente.lotacao}/>
                <LongText label="Descrição" content={ambiente.descricao}/>

                 <View style={styles.button}> 
                    <Button 
                        title="Editar"
                        color="#AC59F5"
                        onPress={() => {
                            this.props.navigation.navigate('NovoAmbienteScreen', {ambienteToEdit: ambiente});
                        }}
                    />
                 </View>
                 <View style={styles.button}>
                    <Button
                        title="Excluir"
                        color="#FF0004"
                        onPress={async () => {
                            const deletado = await this.props.deleteAmbiente(ambiente)
                            
                            if(deletado){
                                this.props.navigation.goBack();
                            }

                        }}
                    />
                </View>

            </ScrollView>
            </>
        )
    }
    }

    const styles = StyleSheet.create({
        image: {
            aspectRatio: 1,

        },
        button: {
            margin: 10,

        },
    });


export default connect(null, {deleteAmbiente})(AmbienteDetalhe); 