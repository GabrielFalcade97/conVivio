import React from "react";
import { ScrollView,  
         StyleSheet, 
         Button, 
         View} from "react-native";
import Line from '../../components/Line/Line';
import HeaderDrawNav from "../../components/headerDrawNav/headerDrawNav";
import { connect } from 'react-redux';
import {cancelReserva} from '../../actions'


class reservaDetalhe extends React.Component{
    render(){
        return(

            <>
            <HeaderDrawNav title='Detalhes' navigation={this.props.navigation}/>
            
            <ScrollView>

                <Line label="Morador" content={reserva.morador}/>  {/* Colocar nome morador */}. 
                <Line label="Local" content={reserva.ambiente}/>  {/* verificar no novaRservaForm */}.
                <Line label="Data" content={reserva.data}/>

                 <View style={styles.button}> 
                    
                 </View>
                 <View style={styles.button}>
                    <Button
                        title="Excluir"
                        color="#FF0004"
                        onPress={async () => {
                            const deleta = await this.props.cancelReserva(reserva)

                            if(deleta){
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
    button: {
        margin: 10,
    },
});


export default connect(null, {cancelReserva})(reservaDetalhe);
