// Imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

// Função que define um componente
export default function App() {
  // Lógica do meu componente
  const nome = "Vitor";

  // Função de alerta
  const alerta = () => {
    alert("Botão clicado!");
  };

  // Retorno com o JSX
  return (
    <ScrollView> 
      <View style={styles.container}>
        <StatusBar style="auto" />
        
        {/* Olá Vitor no topo */}
        <Text style={{ fontSize: 50, fontStyle: "italic" }}>Olá {nome}</Text>
        
        {/* Resultado de 2 + 4 */}
        <Text style={{ fontSize: 30 }}>Resultado: {2 + 4}</Text>
        
        {/* Botão */}
        <Button title="Enviar" onPress={alerta} />
        
        {/* Imagens com espaçamento */}
        <Image
          source={{ uri: "https://cdn.pixabay.com/photo/2021/10/11/18/58/lake-6701636_1280.jpg" }}
          style={styles.image}
        />
        <View style={styles.spacer} />
        <Image
          source={{ uri: "https://cdn.pixabay.com/photo/2023/12/15/22/37/mountains-8451480_1280.jpg" }}
          style={styles.image}
        />
        <View style={styles.spacer} />
        <Image
          source={{ uri: "https://cdn.pixabay.com/photo/2020/03/03/20/31/boat-4899802_1280.jpg" }}
          style={styles.image}
        />
      </View>
    </ScrollView>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textGrande: {
    fontSize: 40,
    fontWeight: '900'
  },
  image: {
    height: 400,
    width: 400,
  },
  spacer: {
    height: 15,
  }
});
