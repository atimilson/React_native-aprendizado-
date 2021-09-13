import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Usuario from './src/Usuario'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Usuario nome="ATIMILSON" cargo=" PROGRAMADOR DELPHI"/>  
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  } 
});
