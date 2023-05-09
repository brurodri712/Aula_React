import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Apostila_003 from './components/apostila-003';

export default function App() {
  return (
    <View style={styles.container}>
      <Apostila_003 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#9E9E9E',
    padding: 8,
  },
});
