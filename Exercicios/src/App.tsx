import React from 'react';
import { StyleSheet, View } from 'react-native';
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'

export default function App() {
  return (
    <View style={styles.container}>
      <Simples text='Flexivel!'/>
      <ParImpar numero={0}/>
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
