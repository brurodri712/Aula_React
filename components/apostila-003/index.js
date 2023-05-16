import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Index() {
const [numero, setNumero] = useState(0);

    function addNumber() {
    setNumero(numero + 1);
    }

    function remNumber () {
    setNumero(numero - 1);
    } 

    function zeroNumber () {
    setNumero(0);
    } 
  
  return(
    <View style={styles.container}>
      <Text style={styles.paragraph}>
         Exemplo 3
      </Text>

      <TouchableOpacity
        onPress={() => alert('Olá, Mundo!')}
        style={styles.button}
        >
        <Text style={styles.textButton}>
          Diga "Olá, Mundo!" 
        </Text>
      </TouchableOpacity>

      <View style={styles.counter}>
        <Text style={styles.textCounter}>{numero}</Text>
        <TouchableOpacity
        onPress={() => zeroNumber()}
        style={styles.button}
        >
        <Text style={styles.textButton}>
        Zerar
        </Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => remNumber()}
        style={styles.button}
        >
        <Text style={styles.textButton}>
        -
        </Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => addNumber()}
        style={styles.button}
        >
        <Text style={styles.textButton}>
        +
        </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}