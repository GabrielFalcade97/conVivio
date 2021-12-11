import * as React from 'react';
import { View, 
         FlatList, 
         StyleSheet, 
         ActivityIndicator } from 'react-native';
import AmbienteCard from '../../components/AmbienteCard/AmbienteCard';
import { connect } from 'react-redux';
import { watchAmbientes } from '../../actions/ambientesActions';

import HeaderDrawNav from '../../components/headerDrawNav/headerDrawNav';
import AddCard from '../../components/AddCard/AddCard';
import { currentUser } from '../../actions';


const isLeft = num => num % 2 === 0;

class Ambiente extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.watchAmbientes();
    }

    render() {

        if (this.props.ambientes === null) {
            return <ActivityIndicator />
        }

        return (
            <View>
                <HeaderDrawNav title='Ambientes' navigation={this.props.navigation} />
                <FlatList style={styles.flatlist}
                    data={[...this.props.ambientes, { isLast: true }]}
                    renderItem={({ item, index }) => {

                        return (
                            item.isLast ?
                                this.props.currentUser().user.email === "admin@admin.com" && <AddCard
                                    onNavigate={() => this.props.navigation.navigate('NovoAmbienteScreen')}
                                />
                                :
                                <AmbienteCard
                                    ambiente={item}
                                    isLeft={isLeft(index)}
                                    onNavigate={() => this.props.navigation.navigate('AmbienteDetalhe', { ambiente: item })}
                                />
                        );
                    }}

                    keyExtractor={item => item.id}
                    numColumns={2}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {

    const { listaAmbientes } = state;

    if (listaAmbientes === null) {
        return { ambientes: listaAmbientes };
    }

    const keys = Object.keys(listaAmbientes);

    const listaAmbientesComId = keys.map(key => {
        return { ...listaAmbientes[key], id: key }
    })
    return { ambientes: listaAmbientesComId };

}

export default connect(
    mapStateToProps,
    {
        watchAmbientes,
        currentUser
    }
)(Ambiente)

const styles = StyleSheet.create({
    flatlist: {
        backgroundColor: '#B15CFC',
        height: '100%',
    }
})    