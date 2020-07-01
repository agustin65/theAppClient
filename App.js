import React from 'react';
import { StyleSheet, View } from 'react-native';

import TouchablePanel from './components/TouchablePanel'

export default function App() {


  return (
    <View style={styles.container}>
      <TouchablePanel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
