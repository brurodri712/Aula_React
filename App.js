import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Apostila_003 from './components/apostila-003';
import Apostila_004 from './components/apostila-004';


export default function App() {
  return (
    <View style={styles.container}>
      <Apostila_004 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFF',
    padding: 8,
  },
});
