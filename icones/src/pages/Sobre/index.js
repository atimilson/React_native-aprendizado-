import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text>Sobre</Text>
      <FontAwesome name="check-circle" size={100} color="green" />
      <StatusBar style="auto" />
    </View>
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
