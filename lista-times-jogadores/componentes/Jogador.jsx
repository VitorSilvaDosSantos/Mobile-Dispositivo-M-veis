import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-paper';

export default function Jogador({ nome, numero, imagem }) {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Image source={{ uri: imagem }} style={styles.imagemJogador} />
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.numero}>#{numero}</Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 120,
    marginRight: 10,
    backgroundColor: '#f0f0f0',
  },
  imagemJogador: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 5,
  },
  numero: {
    fontSize: 12,
    color: '#666',
  },
});
