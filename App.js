import React from 'react';
import { StyleSheet, View } from 'react-native';

import TouchablePanel from './components/TouchablePanel'
import Panel from './components/Panel'

export default function App() {


  return (
    <View style={styles.container}>
      <Panel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
