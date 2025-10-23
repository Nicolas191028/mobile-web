import React, { useEffect, useState} from 'react'
import { Text, ScrollView, View, StyleSheet, Button, Alert, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Card from '../Components/Card';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ListaContatos() {
  const [contatos, setContatos] = useState([]);

  // Funçaõ para buscar contatos do servidor
  const navigation = useNavigation();
  const listaContatos = () => {
    axios
      .get("http://10.0.2.2:3000/contatos")
      .then((resposta) => {
        setContatos(resposta.data)
      })
      .catch((error) => {
        console.error("Erro ao buscar contatos", error);
      });
  }

  // Função para excluir um contato
  const deleteContato = (id) => {
    axios
      .delete(`http://10.0.2.2:3000/contatos/${id}`)
      .then(() => {
        // Atualizar lista de contato
        setContatos(contatos.filter((contato) => contato.id !== id));
        Alert.alert("Sucesso", "Contato Excluido")
      })
      .catch((error) => {
        console.log("Erro excluir contato", error);
        Alert.alert("Erro ao exluir");
      });
  }

  // Use o useEffect para buscar dados
  useEffect(() => {
    listaContatos();
  }, [])

  return (
    <ScrollView style={estilos.container}>
      <Card
        title="Home"
        content="Retornar para Home."
        textButton="Ir para Home"
        onPress={ () => navigation.navigate("Home") }
      />

      <Text style={estilos.titulo}>Lista Contatos</Text>
      <Text>   </Text>
      {contatos.length > 0 ? (
        contatos.map((contato, index) => (
          <View style={estilos.containe} key={index}>
            <Text style={estilos.nome}>{contato.nome}</Text>
            <Text style={estilos.imagem}>{contato.imagem}</Text>            
            <Text style={estilos.telefone}>{contato.telefone}</Text>

            {/* <Button
              title="Excluir"
              onPress={() => deleteContato(contato.id)}
              /> */}

            <TouchableOpacity onPress={() => deleteContato(contato.id)} style={estilos.button}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="trash" size={20} color="#000" style={{ marginRight: 8 }} />
                <Text style={estilos.titleButton}>Excluir</Text>
              </View>
            </TouchableOpacity>

          </View> 
        ))
        ) : (
          <Text> Nenhum contato disponivel </Text>
        )}
        <Text></Text>
        <Text></Text>
    </ScrollView>
  )
}
const estilos = StyleSheet.create ({
  container: {
    backgroundColor: "#ffffffff",
    borderRadius: 1.41,
    shadowColor: 'blue',
    shadowOpacity: 0.2,
    elevation: 2,
    padding: 20,
    margin: 20
  },
    containe: {
    backgroundColor: "#ffd6d6ff",
    borderRadius: 1.41,
    shadowColor: 'red',
    shadowOpacity: 20,
    elevation: 10,
    padding: 50,
    margin: 20
  },
  titulo: {
    textAlign: 'center',
    fontSize: 50,
    color: "red",
    backgroundColor: "#ffa6a6ff"
  },
  nome: {
    textAlign: 'center',
    fontSize: 30,
    backgroundColor: "#ffd6d6ff",
  },
  telefone: {
    textAlign: 'center',
    fontSize: 25,
    backgroundColor: "#ffd6d6ff",
  },
  imagem: {
    textAlign: 'center',
    fontSize: 100,
    backgroundColor: "#ffd6d6ff",
  },
    button: {
        backgroundColor: "#ff0000ff",
        padding: 12,
        alignItems: 'center'
    },
    titleButton: {
        color: '#000000ff',
        fontSize: 16,
        fontWeight: 'bold'
    }
})