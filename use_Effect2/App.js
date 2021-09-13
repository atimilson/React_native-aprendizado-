import React, {useState, useEffect, useMemo, useRef} from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [input, setInput] = useState('');
  const [nome , setNome] = useState('');
  const inputRef = useRef('');
  
  function chamarInput(){
    inputRef.current.focus();
   // inputRef.current.clear();
  }

  useEffect(() =>{
    async function loadData(){
      await AsyncStorage.getItem('@nome').then((value)=>{
        setNome(value);
      })
    }
    loadData();
  },[]);
   

  async  function GravaNome(){
    await AsyncStorage.setItem('@nome',input);
    setNome(input);
    setInput('');
  }

  const letrasNome = useMemo(()=>{
    console.log('PEGANDO QUANTIDADE DE LETRAS!!')
    return nome.length;
  },[nome]);
  return (
    <View style={styles.container}>
      <View style={styles.viewInput}>
        <TextInput  
         style={styles.input}
         value={input}
         onChangeText={(texto)=>setInput(texto)}
         ref={inputRef}
        />
        <TouchableOpacity onPress={GravaNome}>
          <Text style={styles.botaoTexto}>+</Text>
        </TouchableOpacity>        
      </View>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.nome}>{letrasNome}</Text>

      <TouchableOpacity onPress={chamarInput}>
        <Text>Chmar Input</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 35,
  },
  viewInput: {
    flexDirection:'row',
    alignItems: 'center',
  },
  input:{
    width: 250,
    height: 40,
    borderColor:'#000',
    borderWidth:1,
    padding: 10,
  },
  botaoTexto:{
    backgroundColor:'#222',
    color:'#fff',
    height: 40,
    padding: 10,
    marginLeft: 4,
  },
  nome:{
    marginTop: 15,
    fontSize: 30
  }




});