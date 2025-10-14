import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Image1 from "../../assets/img-1.jpg";
import Image2 from "../../assets/img-2.jpg";
import { useNavigation } from '@react-navigation/native';
import Card from '../Components/Card';

export default function Sobre() {
  const navigation = useNavigation();

  const info = {
    nomeApp: "Fut Popeto",
    versao: "1.0.0",
    desenvolvedor: "Nicolas"
  };

  return (
    <ScrollView style={estilos.container}>

        <Card
          title="Home"
          content="Retornar para Home."
          textButton="Ir para Home"
          onPress={ () => navigation.navigate("Home") }
        />

        <Text style={estilos.sobre}>Sobre</Text>
        <Image source={Image1} style={estilos.image} />
        <Text style={estilos.imgTxt}>Pé na areia</Text>
        <View style={estilos.line} />
        <Image source={Image2} style={estilos.image} />
        <Text style={estilos.imgTxt}>Tartaruga</Text>
        <View style={estilos.line} />
        <View style={estilos.containe}>
          <Text style={estilos.titulo}>Sobre o APP</Text>
          <Text>Nome: {info.nomeApp}</Text>
          <Text>Versão: {info.versao}</Text>
          <Text>Desenvolvido por: {info.desenvolvedor}</Text>
        </View> 
    </ScrollView> 
  )
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 1.41,
    shadowColor: 'blue',
    shadowOpacity: 0.2,
    elevation: 2,
    padding: 20,
    margin: 20,
  },
  image: {
    margin: 10,
    borderRadius: 12,
    borderColor: "orange",
    borderWidth: 5,
    margin: 60,
  },
  line: {
    width: "90%",
    height: 1,
    backgroundColor: "#ff0000ff",
    marginVertical: 10
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  sobre: {
    textAlign: "center",
    fontSize: 97,
    color:"yellow",
    backgroundColor: '#fff',
    elevation: 10,
  },
  containe: {
    backgroundColor: '#87ff77ff',
    borderRadius: 1.41,
    shadowColor: 'blue',
    shadowOpacity: 0.2,
    elevation: 2,
    padding: 20,
    margin: 20,
    borderColor: "#9cffe1ff",
    borderWidth: 8,
    borderRadius: 1000
  },
  imgTxt: {
    textAlign: "center",
    fontSize: 20
  }
})
