import React, { useState } from 'react';
import {  Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function App() {
    const [massa, setMassa] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);

function Calcular () {
    const valor = massa / (altura * altura);
    setResultado (valor);
}

    let resultadoTexto = resultado.toFixed(2);
    let resultadoObs = '';

    if (resultado < 18.5) {
        resultadoObs = 'Abaixo do peso';
    }
    if (resultado > 18.5 && resultado < 24.9) {
        resultadoObs = 'Peso normal';
    }
    if (resultado > 25 && resultado < 29.9) {
        resultadoObs = 'Sobrepeso';
    }
    if (resultado > 40) {
        resultadoObs = 'Obesidade Grau 3';  
    }

    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}> CÁLCULO IMC </Text>
        <View style={styles.entradaImc}>
            <TextInput 
                placeholder='Massa' 
                placeholderTextColor='lightray' 
                keyboardAppearance='numeric' 
                style={styles.input}
                onChangeText={(entrada) => setMassa(entrada)} 
            />
            <TextInput 
                placeholder='Altura' 
                placeholderTextColor='lightray' 
                keyboardAppearance='numeric' 
                style={styles.input} 
                onChangeText={(entrada) => setAltura(entrada)} 
            />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => Calcular()} >
            <Text style={styles.buttonText}> Calcular </Text>
        </TouchableOpacity>

        <Text style={styles.resultados}>{resultadoTexto}</Text>
        {resultadoObs !== '' && (
            <Text style={styles.resultadoObs}>{resultadoObs}</Text>
        )}
      </View>
    );
    }