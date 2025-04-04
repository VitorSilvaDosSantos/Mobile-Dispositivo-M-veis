import React from 'react';
import { View, Image, StyleSheet, Text, FlatList } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Jogador from './Jogador';

export default function Time({ nome, anoFundacao, mascote, imagem, jogadores }) {
  return (
    <Card style={styles.card}>
      <Card.Title title={nome} subtitle={`Fundado em ${anoFundacao} | Mascote: ${mascote}`} />
      <Card.Content>
        <Image source={{ uri: imagem }} style={styles.imagemTime} />
        <Title>Jogadores</Title>
        <FlatList
          data={jogadores}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Jogador {...item} />}
          horizontal
        />
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  imagemTime: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginVertical: 10,
  },
});
