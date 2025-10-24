import { TouchableOpacity } from 'react-native';
import { Button, View, Text, StyleSheet } from 'react-native'

export default function Card(props) {

  return (
    <View style={estilos.container}>
        <Text style={estilos.cardTitle}>{props.title}</Text>
        <Text style={estilos.cardContent}>{props.content} </Text>
        {/* <Button 
            title={props.textButton}
            onPress={props.onPress}
        /> */}
        <TouchableOpacity onPress={props.onPress} style={estilos.button}>
            <Text style={estilos.titleButton}>{props.textButton}</Text>
        </TouchableOpacity>
    </View>
  )
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: "#ffff",
        borderRadius: 41,
        shadowColor: 'blue',
        shadowOpacity: 0.2,
        elevation: 2,
        padding: 20,
        margin: 20,
        textAlign: "center"
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center"

    },
    cardContent: {
        fontSize: 14,
        marginBottom: 10,
        textAlign: "center"
    },
    titleButton: {
        color: '#000000ff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: "#ffc400ff",
        padding: 12,
        borderRadius: 8,
        alignItems: 'center'
    }
});