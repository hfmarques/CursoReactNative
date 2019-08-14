import React from 'react';
import { StyleSheet, View } from 'react-native';
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import {Inverter, MegaSena} from './componentes/multi'

export default function App() {
  return (
    <View style={styles.container}>
      <Simples text='Flexivel!'/>
      <ParImpar numero={0}/>
      <Inverter texto='React Nativo!'/>
      <MegaSena numeros={6}/>
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
