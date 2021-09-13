import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Pessoa(props) {
    return(
    <View>
        <View style={[styles.section,styles.topo]}>
            <Text style={[styles.texto]}> Nome : {props.nome}</Text>
        </View>
        <View style={[styles.section,styles.teste]}>
            <Text style={styles.texto}>Cargo : {props.cargo}</Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    topo :{
      backgroundColor: '#aaa',
    },
    teste:{
      backgroundColor: 'blue',
    },
    section:{
      alignItems: 'center',
      justifyContent: 'center',    
      height: 100,
    },
    texto:{
      fontSize: 20,
      color: 'white'
    }
});

export default Pessoa;