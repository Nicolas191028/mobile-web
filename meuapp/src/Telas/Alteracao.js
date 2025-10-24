import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Button, ScrollView, Text, TextInput, View, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import axios from "axios"
import Card from '../Components/Card'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Cadastro() {
    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [imagem, setImagem] = useState('');

    const editarContato = async () => {
        if (!nome || !telefone || !imagem) {
            Alert.alert("Erro, por favor, preencha todos os campos");
            return;
        }

        const novoContato = {nome, telefone, imagem};

        axios
            .post(`http://10.0.2.2:3000/contatos`, novoContato)
            .then((resposta) => {
                if (resposta.status === 201) {
                    setNome('');
                    setTelefone('');
                    setImagem('');
                    navigation.navigate("ListaContatos")
                } else {
                    Alert.alert("Erro, falha ao editar contato")
                }
            })
    }
    

  return (
    <ScrollView style={estilos.container}>

        <View style={estilos.containerInt}>
            <View style={estilos.cad}>
                <Text style={estilos.cadastro}>Editar Perfil<Icon name="app-registration" size={20} color="#ff0000ff" style={{ fontSize: 30 }}/></Text>         
            </View>
            <Text style={estilos.label}>Nome:</Text>
            <TextInput 
                style={estilos.input}
                value={nome}
                onChangeText={setNome}
                placeholder='Edite o Nome'
            />

            <Text style={estilos.label}>Telefone:</Text>
            
            <TextInput 
                style={estilos.input}
                value={telefone}
                onChangeText={setTelefone}
                placeholder='Edite o telefone'
            />
            <Text style={estilos.label}>Imagem:</Text>
            <TextInput 
                style={estilos.input}
                value={imagem}
                onChangeText={setImagem}
                placeholder='Coloque uma nova imagem'
            />

            {/* <Button title="Cadastrar" onPress={enviarContato}/> */}

            <TouchableOpacity onPress={editarContato} style={estilos.button}>
                <Text style={estilos.titleButton}>Clique aqui</Text>
            </TouchableOpacity>
        </View>
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
    cadastro: {
        backgroundColor: '#fff',
        borderRadius: 1.41,
        padding: 2,
        margin: 20, 
        textAlign: "center",
        fontSize: 40,
        color: "red"    
    },
    containerInt: {
        backgroundColor: '#fff',
        borderRadius: 1.41,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 2,
        padding: 20,
        margin: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
        color: "#e6cf00ff"
    },
    input: {
        borderWidth: 1,
        borderColor:"#ccc",
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: "#ffffffff"
    },
    button: {
        backgroundColor: "#ff9100ff",
        padding: 12,
        borderRadius: 8,
        alignItems: 'center'
    },
    titleButton: {
        color: '#000000ff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    cad: {
        alignItems: 'center'
    }
})