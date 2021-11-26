import React from "react";
import { ScrollView,  
         Image,
         StyleSheet } from "react-native";
import Line from '../../components/Line/Line'
import LongText from "../../components/LongText/LongText";
import HeaderDrawNav from "../../components/headerDrawNav/headerDrawNav";

export default class AmbienteDetalhe extends React.Component{
    render(){
         const {ambiente} = this.props.route.params;
         
        return(
            <>
            <HeaderDrawNav title={ambiente.title} navigation={this.props.navigation}/>
        
            <ScrollView>

                <Image
                 source={{
                     uri: ambiente.img
                 }}
                 style={styles.image}
                 />

                <Line label="Título" content={ambiente.title}/>
                <Line label="Lotação" content={ambiente.lotacao}/>
                <LongText label="Descrição" content={ambiente.descricao}/>
            </ScrollView>
            </>
        )
    }
    }

    const styles = StyleSheet.create({
        image: {
            aspectRatio: 1,

        }
    });

    
