import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Index() {
const [numero, setNumero] = useState(0);

    function addNumber() {
      setNumero(numero++);
      //setNumero(numero + 1);
    }
  
  return(
    <View style={styles.container}>
      <Text style={styles.paragraph}>
         Exemplo 3
      </Text>

      <Text style={styles.textCounter}>{numero}</Text>

      <TouchableOpacity
        onPress={() => addNumber()}
        style={styles.button}
        >
        <Text style={styles.textButton}>
          +1
        </Text>
      </TouchableOpacity>              
    </View>
  );
}