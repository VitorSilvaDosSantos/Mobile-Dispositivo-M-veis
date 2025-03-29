import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  const alerta = () => alert("Gol do Neymar!");

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.nomeJogador}>Neymar Jr.</Text>
        <Text style={styles.info}>📍 Nacionalidade: Brasil</Text>
        <Text style={styles.info}>⚽ Posição: Atacante</Text>
        <Text style={styles.info}>🏆 Títulos: Libertadores, Champions League, Copa do Brasil</Text>
        <Text style={styles.info}>🎯 Gols na carreira: 400+</Text>

        {[
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8LNy9plJB0Mu0bQ8s_P-ikHp1322ZzHPBLg&s",
  
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxTn6lVAuezzXqn4fATWzlBkbodRVJM8fRLQ&s",
        ].map((img, index) => (
          <Image key={index} source={{ uri: img }} style={styles.imagem} />
        ))}

        <Button title="GOL!" onPress={alerta} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#87CEEB", alignItems: "center", padding: 20 },
  nomeJogador: { fontSize: 32, fontWeight: "bold", marginBottom: 10, color: "white" },
  info: { fontSize: 18, color: "white", marginBottom: 5 },
  imagem: { width: 300, height: 200, borderRadius: 10, marginTop: 10 },
});
