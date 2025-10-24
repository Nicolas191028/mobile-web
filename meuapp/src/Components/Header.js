import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Header() {
  return (
    <View style={estilos.topo}>
        <Text style={estilos.tituloHeader}>Fut Popeto <Icon name="futbol-o" size={20} color="#ff0000ff" style={{ marginRight: 8 }} /></Text>
    </View>
  )
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 120,
        backgroundColor: "#ff7b00ff",
        borderBottomColor: "#ffae00ff",
        borderBottomWidth: 3
    },
    tituloHeader: {
        width: "100%",
        textAlign: 'center',
        color: "#ff0000ff",
        fontWeight: "bold",
        fontSize: 25,
        paddingTop: 40
    }
});