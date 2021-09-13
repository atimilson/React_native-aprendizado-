import React, {useState} from 'react';
import { StyleSheet, Text, View, Button,Modal } from 'react-native';
import Detalhes from './src/detalhes'

export default function App() {
  const [visivel, SetVisivel] = useState(false)
  function Alerta(){
    SetVisivel(true);
  }
  
  function sairmodal(){
    SetVisivel(false);
  }
  return (
    <View  style={styles.container} >
      <Button title="Acessar" onPress={Alerta} />
      <Modal transparent={true} animationType="slide" visible={visivel}>
        <Detalhes fechar={ sairmodal }/>
      </Modal>
    </View>
  );r
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




