import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import Apostila_003 from './components/apostila-003';
import Apostila_004 from './components/apostila-004';
import Apostila_005 from './components/apostila-005';
import Apostila_006 from './components/apostila-006';


export default function App() {
  return (
    <View style={styles.container}>
      <Apostila_006 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFF',
    padding: 8,
  },
});
