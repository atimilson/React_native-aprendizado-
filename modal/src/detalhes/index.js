import React, {useState} from 'react';
import { StyleSheet, Text, View, Button,Modal } from 'react-native';
function Detalhe(props){
    return(
        <View style={styles.container}>
            <View style={styles.modal}>
                <Text style={styles.titulo}>Detalhe</Text>
                <Button title="fechar" 
                onPress={props.fechar}/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    modal:{
        backgroundColor: '#292929',
        width: '100%',
        height: 350,
        borderRadius: 5,
    },
    titulo:{
        fontSize: 25,
        color: '#fff',
        textAlign: 'center',
        padding: 20,
    }
})

export default Detalhe;

