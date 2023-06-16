import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';



function Index(){

    const [valorEntrada, setValorEntrada] = useState(' ');
    const [valorEntrada2, setValorEntrada2] = useState('');
    const [mensagem, setMensagem] = useState('Mensagem');
    //const [mensagen, setMensagen] = useState('Mensagen');

    const exibirTexto = () => {
        const nomeCompleto = valorEntrada + ' ' + valorEntrada2;
        setMensagem(nomeCompleto);
    }


    return(
        <View style={styles.container}>
            <Text style={styles.texto}> Exemplo 4 </Text>

            <Text style={styles.txtSaida}>{mensagem}</Text>
            
            <Text style={styles.texto}>Nome</Text>
            <TextInput style={styles.txtEntrada} keyboardType='default' onChangeText={(saida) => setValorEntrada (saida)} value={valorEntrada} />

            <Text style={styles.texto}>Sobrenome</Text>
            <TextInput style={styles.txtEntrada} keyboardType='default' onChangeText={(saida) => setValorEntrada2 (saida)} value={valorEntrada2} />

            <TouchableOpacity style={styles.button} onPress={exibirTexto} > 
                <Text style={styles.textButton}>Exibir mensagem</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Index;
