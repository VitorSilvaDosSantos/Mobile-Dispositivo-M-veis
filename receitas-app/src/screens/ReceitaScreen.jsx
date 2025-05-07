import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import { Button, Card } from 'react-native-paper'

export default function ReceitaScreen({ navigation, route }) {

  const receita = route.params.receita

  return (
    <ScrollView>
      <Card style={{ margin: 10 }}>
        <Card.Cover source={{ uri: receita.imagem }} />
        <Card.Content>
          <Text style={styles.nome}>{receita.nome}</Text>
          <Text>Tempo de Preparo: {receita.tempoPreparo}</Text>
          <Text>Porções: {receita.porcoes}</Text>

          <Text style={styles.titulo}>Ingredientes:</Text>
          {receita.ingredientes.map((item, index) => (
            <Text key={index}>- {item}</Text>
          ))}

          <Text style={styles.titulo}>Modo de Preparo:</Text>
          {receita.modoPreparo.map((item, index) => (
            <Text key={index}>{item}</Text>
          ))}
        </Card.Content>
        <Card.Actions>
          <Button
            mode='contained-tonal'
            icon='arrow-left'
            onPress={() => navigation.goBack()}
          >
            Voltar
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  titulo: {
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 16
  }
})
