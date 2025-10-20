import React, {useEffect, useState} from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Card from '../Components/Card';
import axios from 'axios';

export default function Faq() {
  const navigation = useNavigation();
  const [faq, setFaq] = useState([]);

  const listaFaq = () => {
        axios
             .get("http://10.0.2.2:3000/faq")
            .then((resp) => {
                setFaq(resp.data)
            })
            .catch((error) => {
                console.error("Erro ao buscar faq", error);
            });
    }

    useEffect(() => {
            listaFaq();
        }, [])

  return (
    <ScrollView style={estilos.container}> 

        <Card
          title="Home"
          content="Retornar para Home."
          textButton="Ir para Home"
          onPress={ () => navigation.navigate("Home") }
        />

        <Text style={estilos.title}>Faq - Se vira</Text>
        <Text></Text>
        <Text style={estilos.frequen}>Perguntas Frequentes ^</Text>
        <Text></Text><Text></Text>
        <View style={estilos.containe}>
          <Text style={estilos.pergunta}>Por que o céu é azul? ^</Text>
          <Text style={estilos.resposta}>O céu parece azul porque a luz do Sol, ao entrar na atmosfera, é espalhada pelas moléculas de ar. A luz azul tem um comprimento de onda menor e é espalhada mais do que outras cores, o que faz com que vejamos o céu predominantemente azul.</Text>
        </View>
        <View style={estilos.containe}>
          <Text style={estilos.pergunta}>Qual é o animal mais rápido do mundo? ^</Text>
          <Text  style={estilos.resposta}>O animal mais rápido do mundo é o falcão-peregrino, que pode atingir mais de 300 km/h em mergulhos para capturar presas. Em terra, o animal mais rápido é a guepardo (chita), que pode chegar a cerca de 110 km/h em corridas curtas.</Text>
        </View>
        <View style={estilos.containe}>
          <Text style={estilos.pergunta}>Se eu pudesse viajar no tempo, o que deveria visitar primeiro? ^</Text>
          <Text  style={estilos.resposta}>Depende do seu interesse! Se gosta de história, poderia visitar o Egito Antigo e ver a construção das pirâmides. Se for fã de ciência, ver a Revolução Científica no século XVII seria incrível. Mas cuidado com as regras do paradoxo temporal!</Text>
        </View>
        <View style={estilos.containe}>
          <Text style={estilos.pergunta}>Qual é a diferença entre um vírus e uma bactéria? ^</Text>
          <Text  style={estilos.resposta}>Bactérias são organismos vivos unicelulares, que podem viver sozinhos e se reproduzir por conta própria.
                                          Vírus não são considerados seres vivos por muitos cientistas — eles precisam invadir células de outros organismos para se reproduzirem.</Text>
        </View>
        <View style={estilos.containe}>
          <Text style={estilos.pergunta}>É possível viver sem tecnologia hoje em dia? ^</Text>
          <Text  style={estilos.resposta}>É possível, mas muito difícil. A tecnologia está presente em quase tudo: transporte, comunicação, saúde, agricultura... Viver sem ela exigiria um retorno a um estilo de vida bem mais simples e isolado, algo que poucas pessoas estão preparadas para fazer.</Text>
        </View>
        <Text style={estilos.nFreq}>Perguntas não Frequentes^ (mas importantes)</Text>
        <View>
                {faq.length > 0 ? (
                  faq.map((faqs, index) => (
                    <View style={estilos.containerr} key={index}>
                      <Text style={estilos.perguntaNFreq}>{faqs.pergunta}</Text>
                      <Text style={estilos.respostaNFreq}>{faqs.resposta}</Text>
                    </View>
                   ))
                ) : (
              <   Text> Nenhuma Faq disponivel </Text>
                )}
          </View>
        <Text style={estilos.hr}>--------------------------------------------------------------------------------------</Text>
        <Text> </Text>
        <Text style={estilos.faca}>Faça sua pergunta:</Text>
    </ScrollView>
  )
}
const estilos = StyleSheet.create({
    container: {
      backgroundColor: "#ffffffff",
      borderRadius: 1.41,
      shadowColor: 'blue',
      shadowOpacity: 0.2,
      elevation: 2,
      padding: 20,
      margin: 20
    },
    title: {
      textAlign: 'center',
      fontSize: 50,
      color: "red",
      backgroundColor: "#ffa6a6ff"
    },
    containe: {
      backgroundColor: "#fff897ff",
      borderRadius: 1.41,
      shadowColor: 'blue',
      shadowOpacity: 0.2,
      elevation: 2,
      padding: 20,
      margin: 20,
      borderColor: "#ffee00ff",
      borderWidth: 5,
      borderRadius: 10
    },
    frequen: {
      textAlign: 'center',
      color: "#ff9100ff",
      fontSize: 25,
      width: "100%",
      height: 35,
      textAlign: 'center',
      backgroundColor: "#ffc57aff",
      shadowColor: 'black',
      shadowOpacity: 0.2,
      elevation: 2,
    },
    pergunta: {
      width: "100%",
      height: 45,
      textAlign: 'center',
      backgroundColor: "#8bff7bff",
      shadowColor: 'black',
      shadowOpacity: 0.2,
      elevation: 2,
      borderColor: "#15ff00ff",
      borderWidth: 5,
      borderRadius: 5
    },
    resposta: {
      width: "100%",
      height: 150,
      textAlign: 'center',
      backgroundColor: "#ffffffff",
      shadowColor: 'black',
      shadowOpacity: 0.2,
      elevation: 2,
      borderColor: "#c5c5c5ff",
      borderWidth: 5,
      borderRadius: 10
    },
    faca: {
      width: "100%",
      height: 75,
      textAlign: 'center',
      backgroundColor: "#ffffffff",
      shadowColor: 'black',
      shadowOpacity: 0.2,
      elevation: 2,
    },
    hr: {
      color: "#ff0000ff"
    },
    nFreq: {
      textAlign: 'center',
      color: "#00b7ffff",
      fontSize: 25,
      width: "100%",
      height: 60,
      textAlign: 'center',
      backgroundColor: "#7ad9ffff",
      shadowColor: 'black',
      shadowOpacity: 0.2,
      elevation: 2,
    },
    containerr: {
      backgroundColor: "#fff897ff",
      borderRadius: 1.41,
      shadowColor: 'blue',
      shadowOpacity: 0.2,
      elevation: 2,
      padding: 20,
      margin: 20,
      borderColor: "#ffee00ff",
      borderWidth: 5,
      borderRadius: 10
    },
    perguntaNFreq: {
      width: "100%",
      height: 45,
      textAlign: 'center',
      backgroundColor: "#8bff7bff",
      shadowColor: 'black',
      shadowOpacity: 0.2,
      elevation: 2,
      borderColor: "#15ff00ff",
      borderWidth: 5,
      borderRadius: 5
    },
    respostaNFreq: {
      width: "100%",
      height: 150,
      textAlign: 'center',
      backgroundColor: "#ffffffff",
      shadowColor: 'black',
      shadowOpacity: 0.2,
      elevation: 2,
      borderColor: "#c5c5c5ff",
      borderWidth: 5,
      borderRadius: 10      
    }
});
