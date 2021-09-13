import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator  } from '@react-navigation/stack'
import { Ionicons  } from '@expo/vector-icons';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ICONS = {
  Home: {
    name: 'ios-home'
  },
  Sobre:{
    name: 'ios-people'
  }
};

function Tabs(){  
  return(     
      <Tab.Navigator 
      screenOptions={ ({route}) => ({
        tabBarIcon: ({ color, size}) => {
          const { name } = ICONS[route.name];
          return <Ionicons name={name} color={color} size={size} />
        } 
      }) }
      tabBarOptions={{
        style:{
          backgroundColor: '#121212'
        },
        activeTintColor: '#FFF',
      }}      
      >
        
        <Tab.Screen  name="Home" component={Home} />
        <Tab.Screen  name="Sobre" component={Sobre} />
      </Tab.Navigator> 
  );
}

export default function App(){
  return(
     <NavigationContainer>
       <StatusBar/>
       <Stack.Navigator>
         <Stack.Screen name="Home" component={Tabs} options={{ headerShown : false}} />
         <Stack.Screen name="Contato" component={Contato} />
       </Stack.Navigator> 
     </NavigationContainer>
  );
}