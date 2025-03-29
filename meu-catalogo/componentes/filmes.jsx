import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Filme({ nome, ano, diretor, tipo, capa }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: capa }} style={styles.imagem} />
      <Text style={styles.titulo}>{nome} ({ano})</Text>
      <Text>Diretor: {diretor}</Text>
      <Text>Gênero: {tipo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  imagem: { width: 200, height: 300 },
  titulo: { fontWeight: 'bold', fontSize: 16 },
});
