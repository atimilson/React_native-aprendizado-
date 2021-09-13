import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function App() {
  const [carroSelecionado, setCarroSelecionado] = useState(0);
  const [carros, setCarros] = useState([
    {key: 1 , nome: 'Golf 1.6', valor :62.000},
    {key: 2 , nome: 'Golf 2.0' , valor :70.000},
    {key: 3 , nome: 'Saveiro 1.6' , valor :80.000},
    {key: 4 , nome: 'Saveiro 2.0' , valor : 85.000},
    {key: 5 , nome: 'GOL G5 1.0', valor : 55.000},
    {key: 5 , nome: 'GOL G5 1.6', valor : 65.000}
  ]);

  let carrosItem = carros.map((v,k)=>{
    return <Picker.Item key={k} value={k} label={v.nome} />
  });

  return (
    <View style={styles.container}>
      <Picker styles={styles.picker}
        selectedValue={carroSelecionado}
        onValueChange={(itemValue, itemindex) =>{setCarroSelecionado(itemValue)}}
      >
        {carrosItem}
      </Picker> 
      <Text>{carros[carroSelecionado].nome}</Text>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50, 
    flex : 1,
  },
  picker:{
    width : 100,
    backgroundColor : '#000'
  }
});
