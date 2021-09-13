import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/pages/Home';
import Contato from './src/pages/Contato';
import Sobre from './src/pages/Sobre';
import Custom from './src/components/Custom';

const Drawer = createDrawerNavigator();

export default function App() {
  return ( 
    <NavigationContainer>  
      <StatusBar  />   
      <Drawer.Navigator
       drawerContent={Custom}
      >        
        <Drawer.Screen name="Home" component={Home}  />
        <Drawer.Screen name="Sobre" component={Sobre}  />
        <Drawer.Screen name="Contato" component={Contato}  />
      </Drawer.Navigator>       
    </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
