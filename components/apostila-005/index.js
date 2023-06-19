import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
//import Constants from 'expo-constants';

import styles from './styles';

export default function Index() {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState(0);

    function Soma() {
        const conta = parseInt(n1) + parseInt(n2);
        setTotal(conta.toString());
    }

    function Subt() {
        const conta = parseInt(n1) - parseInt(n2);
        setTotal(conta.toString());
    }

    function Multi() {
        const conta = parseInt(n1) * parseInt(n2);
        setTotal(conta.toString());
    }

    function Divisao() {
        const conta = parseInt(n1) / parseInt(n2);
        setTotal(conta.toString());
    }

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>
                Exemplo 5
            </Text>

            <Text style={styles.txtSaida}>
                Calculadora Básica
            </Text>

            <Text style={styles.textLabel}>Número 1</Text>
            <TextInput
                style={styles.txtEntrada}
                onChangeText={(entrada) => setN1(entrada)}
                value={n1.toString()}
            />
            <Text style={styles.txtSaida}>
                +
            </Text>
            <Text style={styles.textLabel}>Número 2</Text>
            <TextInput
                style={styles.txtEntrada}
                onChangeText={(entrada) => setN2(entrada)}
                value={n2.toString()}
            />
            <Text style={[styles.txtSaida, { margin: 0 }]}>
                =
            </Text>
            <Text style={styles.textLabel}>TOTAL</Text>
            <TextInput
                style={styles.txtEntrada}
                editable={false}
                value={total.toString()}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => Soma()}>
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => Subt()}>
                    <Text style={styles.textButton}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => Multi()}>
                    <Text style={styles.textButton}>X</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => Divisao()}>
                    <Text style={styles.textButton}>/</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}