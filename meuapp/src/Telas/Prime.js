import {View, StyleSheet, Text } from "react-native";

export default function Prime() {
  return (
    <>    
      <View style={estilos.topo}>
        <Text style={estilos.tituloHeader}>Cursos SENAI</Text>
      </View>
      
      <View style={estilos.cursosContent}>
        <Text> - Programação em PHP</Text>
        <Text> - Informática Básica</Text>
        <Text> - Programação em JavaScript</Text>
        <Text> - HTML Completo</Text>
        <Text> - Programação em Phyton</Text>
        <Text> - Debugação de Códigos</Text>
        <Text> - Programação em C#</Text>
        <Text> - Estilização em CSS</Text>
        <Text> - Programação em Web-Mobile</Text>
      </View>
    </>
  )
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    heigth: 150,
    backgroundColor: "red",
  },
  tituloHeader: {
    width: "100%",
    color: "white",
    textAlign: "center",
    paddingTop: 30,
    fontSize: 20,
  },

  cursosContent: {
    paddingTop: 25,
    width: "100%",
    heigth: 150,
    backgroundColor: "#ff3939ff",
  }

});
