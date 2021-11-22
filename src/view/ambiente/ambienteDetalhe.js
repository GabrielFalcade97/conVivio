import React from "react";
import { View, Text } from "react-native";



export default class AmbienteDetalhe extends React.Component{
    render(){
    // const {ambiente} = this.props.navigation.state.params;
        const ambiente = {
                
                "id": 1,
                "title": "Salão de festa",
                "descricao": "Espaço para realização de festas/eventos dos moradores do condomínio e visitantes",
                "lotacao": 75,
                "img": "https://www.hoteltaiyo.com.br/wp-content/uploads/2017/11/Salao_de_festa-768x512.jpg"
        
            
        }

        return(
            
            <View>
                <Text>{ ambiente.title }</Text>
                <Text>Lotação máxima: {ambiente.lotacao} pessoas</Text>
                <Text>Sobre o ambiente: {ambiente.descricao}</Text>
            </View>
        )
    }
    }

