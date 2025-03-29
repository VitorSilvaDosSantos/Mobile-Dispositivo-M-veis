import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Serie({ nome, ano, diretor, temporadas, capa }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: capa }} style={styles.imagem} />
      <Text style={styles.titulo}>{nome} ({ano})</Text>
      <Text>Diretor: {diretor}</Text>
      <Text>Temporadas: {temporadas}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  imagem: { width: 200, height: 300 },
  titulo: { fontWeight: 'bold', fontSize: 16 },
});
