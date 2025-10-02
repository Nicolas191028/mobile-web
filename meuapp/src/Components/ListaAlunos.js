import { Text, View, StyleSheet, FlatList  } from "react-native";

export default function ListaUsuarios() {
  const alunos = ["Tim" , "Doris" , "Yung" , "Michael" , "Jorge" , "Carlos"];
  return (
    <View style={estilos.container}>
      <Text style={estilos.lista}>Lista de Alunos🧑:</Text>
      <Text> </Text>
        <FlatList 
            data={alunos}
            renderItem={({ item }) => (
                <View style={estilos.allItem}>
                    <Text style={estilos.bola}>                          •</Text>
                    <Text style={estilos.alunos}>{item}</Text>
                </View>
            )}
        />
    </View>
  )
}

const estilos = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 20,
        backgroundColor: "#000000ff"
    },

    lista: {
        textAlign: "center",
        fontSize: 25,
        padding:20,
        borderWidth: 1, 
        borderRadius: 100,
        borderColor: "#fff",
        elevation: 3,
        color: "#fff"
    },

    allItem: {
        textAlign: "center",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
        padding: 12,
        backgroundColor: "#ff9f9fff",
        borderColor: "red",
        borderWidth: 2, 
        borderRadius: 10,
        elevation: 3,
    },
    bola: {
        textAlign: "center",        
        fontSize: 20,
        marginRight: 8,
        color: "#ffffffff",
    },
    alunos: {
        textAlign: "center",
        fontSize: 16,
        color: "#fff",
        textDecorationLine: "underline",
    }
});
