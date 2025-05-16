import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Button, Text, Card } from 'react-native-paper';

const MegaSenaScreen = () => {
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  const gerarJogo = () => {
    const numeros = new Set();
    while (numeros.size < 6) {
      numeros.add(Math.floor(Math.random() * 60) + 1);
    }
    const jogo = Array.from(numeros).sort((a, b) => a - b);
    setJogosMegaSena([jogo, ...jogosMegaSena]);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button mode="contained" onPress={gerarJogo}>
        Gerar Jogo da Mega Sena
      </Button>

      <FlatList
        data={jogosMegaSena}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Card style={{ marginVertical: 8 }}>
            <Card.Content>
              <Text>Jogo {index + 1}: {item.join(', ')}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

export default MegaSenaScreen;
