import React from "react";
import { ScrollView,  
         Image,
         StyleSheet, 
         Button, 
         View} from "react-native";
import Line from '../../components/Line/Line';
import HeaderDrawNav from "../../components/headerDrawNav/headerDrawNav";


export default class reservaDetalhe extends React.Component{
    render(){
        return(

            <>
            <HeaderDrawNav title='Detalhes' navigation={this.props.navigation}/>
            
            <ScrollView>

                <Line label="Ambienete" content={ambiente.title}/>
                <Line label="Morador" content={ambiente.lotacao}/>  {/* Colocar nome morador */}. 
                <Line label="Local" content={ambiente.descricao}/>  {/* Colocar data */}.

                 <View style={styles.button}> 
                    <Button 
                        title="Editar"
                        color="#AC59F5"
                        
                    />
                 </View>
                 <View style={styles.button}>
                    <Button
                        title="Excluir"
                        color="#FF0004"
                        
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