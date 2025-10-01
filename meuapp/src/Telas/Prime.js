import {View, StyleSheet, Text } from "react-native";
import ListaCursos from "../Components/ListaCursos"

export default function Prime() {
  return (
    <>    
      <View style={estilos.topo}>
        <Text style={estilos.tituloHeader}>Cursos SENAI</Text>
      </View>
      
      <View style={estilos.cursosContent}>
        <Text style={estilos.itens}> - Programação em PHP</Text>
        <Text style={estilos.itens}> - Informática Básica</Text>
        <Text style={estilos.itens}> - Programação em JavaScript</Text>
        <Text style={estilos.itens}> - HTML Completo</Text>
        <Text style={estilos.itens}> - Programação em Phyton</Text>
        <Text style={estilos.itens}> - Debugação de Códigos</Text>
        <Text style={estilos.itens}> - Programação em C#</Text>
        <Text style={estilos.itens}> - Estilização em CSS</Text>
        <Text style={estilos.itens}> - Programação em Web-Mobile</Text>
      </View>

    <ListaCursos></ListaCursos>
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
    backgroundColor: "#ffe0e0ff",
  },

  itens: {
    backgroundColor: "#770000ff",
    fontSize: 15,
    textDecorationLine: "underline",
    textAlign: "center",
    color: "#008cffff"
  },

});
