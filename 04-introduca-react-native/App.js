// Imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

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
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image
      source={{
        uri: "https://cdn.pixabay.com/photo/2017/12/12/11/37/bastei-3014467_1280.jpg"
      }}

      style={{
        height: 400,
        width: 400
      }}

      />
      
      <Text>Projeto Vítor</Text>
      <Text>Bem Vindo {2 + 2}</Text>

      <Button title="Clicar" onPress={alerta} />
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

