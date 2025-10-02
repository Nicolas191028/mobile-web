import { Text, View, StyleSheet, FlatList } from "react-native";

export default function listaCursos() {
  const data = ["React Native" , "MongoDB" , "Express" , "Node.js" , "C#"];

  return (
    <View style={estilos.container}>
        <Text style={estilos.cursos}>Cursos Esgotados:</Text>
        <Text> </Text>
        <FlatList 
            data={data}
            renderItem={({ item }) => (
                <View style={estilos.lastItem}>
                    <Text style={estilos.bullet}>• </Text>
                    <Text style={estilos.text}>{item}</Text>
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
        backgroundColor: "#ffcdcdff"
    },
    lastItem: {
        textAlign: "center",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
        padding: 12,
        backgroundColor: "#000000ff",
        borderWidth: 1, 
        borderColor: "grey",
        borderRadius: 100,
        elevation: 3,
    },
    bullet: {
        textAlign: "center",        
        fontSize: 20,
        marginRight: 8,
        color: "red",
    },
    text: {
        textAlign: "center",
        fontSize: 16,
        color: "red",
    },

    cursos: {
        textAlign: "center",
        fontSize: 25,
        padding:20,
        borderWidth: 1, 
        borderRadius: 100,
        borderColor: "#fff",
        elevation: 3,
        color: "#fff"
    } 
});
