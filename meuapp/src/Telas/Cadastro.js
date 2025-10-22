import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Button, ScrollView, Text, TextInput, View, StyleSheet, Alert } from 'react-native'
import axios from "axios"
import Card from '../Components/Card'

export default function Cadastro() {
    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [imagem, setImagem] = useState('');

    const enviarContato = async () => {
        if (!nome || !telefone || !imagem) {
            Alert.alert("Erro, por favor, preencha todos os campos");
            return;
        }

        const novoContato = {nome, telefone, imagem};

        axios.post(`http://10.0.2.2:3000/contatos`, novoContato)
    }
    

  return (
    <ScrollView style={estilos.container}>
        <Card
                  title="Home"
                  content="Retornar para Home."
                  textButton="Ir para Home"
                  onPress={ () => navigation.navigate("Home") }
        />
        <Text style={estilos.label}>Nome:</Text>
        <TextInput 
            style={estilos.input}
            value={nome}
            onChange={setNome}
            placeholder='Digite o Nome'
        />

        <Text style={estilos.label}>Telefone:</Text>
        <TextInput 
            style={estilos.input}
            value={telefone}
            onChange={setTelefone}
            placeholder='Digite o telefone'
        />
        <Text style={estilos.label}>Imgaem:</Text>
        <TextInput 
            style={estilos.input}
            value={imagem}
            onChange={setImagem}
            placeholder='Coloque uma imagem'
        />

        <Button title="Cadastrar" onPress={enviarContato}/>
    </ScrollView>
  )
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#ccc',
        borderRadius: 1.41,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 2,
        padding: 20,
        margin: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 5
    },
    input: {
        borderWidth: 1,
        borderColor:"#ccc",
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: "#fff"
    }
})