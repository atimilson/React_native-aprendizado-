import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
 return (
   <View>   
     <StatusBar />  
     <Text>Home</Text> 
     <Button
     title="Contato"
     onPress={ () => navigation.navigate('Contato') }/>

     <Button title="Abrir"
     onPress={ () => navigation.toggleDrawer()} />
   </View>
  );
}