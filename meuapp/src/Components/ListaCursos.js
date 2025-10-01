import { Text, View, StyleSheet, FlatList } from "react-native";

export default function listaCursos() {
  const data = ["React Native" , "MongoDB" , "Express" , "Node.js" , "C#"];

  return (
    <View style={estilos.container}>
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
        backgroundColor: "#ff5100ff"
    },
    lastItem: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
        padding: 12,
        backgroundColor: "orange",
        borderWidth: 1, 
        borderColor: "grey",
        borderRadius: 10,
        elevation: 3
    },
    bullet: {
        fontSize: 20,
        marginRight: 8,
    },
    text: {
        fontSize: 16,
    }
});
