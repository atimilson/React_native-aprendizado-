import React ,{useState} from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import Slider from '@react-native-community/slider';


export default function App() {
  const [valor, setValor] = useState(50);
  const [status, setStatus] = useState(false);

  return (
    <View style={styles.container}>
      <Slider
        style={{marginTop:100}}
        minimumValue={0}
        maximumValue={100}
        value={valor}
        minimumTrackTintColor="red"
        maximumTrackTintColor="yellow"
        thumbTintColor="yellow"
        onValueChange={(valorSelecionado)=>
          setValor(valorSelecionado)
        }
      />      
      <Text style={{color: "white", fontSize: 30, textAlign:"center"}}>{valor.toFixed(0)}</Text>
      <Switch
       value={status}
       onValueChange={(stado)=>setStatus(stado)}
       trackColor={{false:'white', true:'red'}}
       thumbColor={status ? 'red':'white'}
      />
      <Text style={{color: "white", fontSize: 30, textAlign:"center"}}>{status ? 'ativo':'Inativo'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
