import React from 'react';
import { StyleSheet, View } from 'react-native';

import TouchablePanel from './components/TouchablePanel'
import Panel from './components/Panel'
import Boton from './components/Boton'

export default function App() {


  return (
    <View style={styles.container}>
      <Panel />
      <Boton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d4d4d',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
