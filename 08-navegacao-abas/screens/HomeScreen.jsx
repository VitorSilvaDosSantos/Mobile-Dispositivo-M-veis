import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, Title, Paragraph } from 'react-native-paper' // ✅ Importação correta

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center", fontSize: 24, marginBottom: 10 }}>Tela de Início</Text>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Um Título</Title>
          <Paragraph>Vitor Vencedor</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://cdn.pixabay.com/photo/2024/11/25/10/38/mountains-9223041_1280.jpg' }} />
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Outro Título</Title>
          <Paragraph>Mais conteúdo aqui</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://cdn.pixabay.com/photo/2024/11/25/10/38/mountains-9223041_1280.jpg' }} />
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Último Card</Title>
          <Paragraph>Finalizando</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://cdn.pixabay.com/photo/2024/11/25/10/38/mountains-9223041_1280.jpg' }} />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    paddingTop: 10
  },
  card: {
    width: '90%',
    marginBottom: 15
  }
})
