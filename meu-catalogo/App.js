import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import Filme from './componentes/filmes.jsx';
import Serie from './componentes/serie.jsx';

const listaFilmes = [
  { nome: 'A Doce Vida', ano: 1960, diretor: 'Federico Fellini', tipo: 'Drama', capa: 'https://i.pinimg.com/236x/f3/c6/1c/f3c61cedf30d5212ba7a6885a55c71fc.jpg' },
  { nome: 'Psicose', ano: 1960, diretor: 'Alfred Hitchcock', tipo: 'Terror', capa: 'https://i.pinimg.com/236x/e4/84/72/e484729535437d2e79882c359111db56.jpg' },
];

const listaSeries = [
  { nome: 'Buffy, a Caça-Vampiros', ano: 1997, diretor: 'Joss Whedon', temporadas: 7, capa: 'https://i.pinimg.com/236x/da/71/74/da71743ddd8f1cc98fa0565215919275.jpg' },
  { nome: 'Desperate Housewives', ano: 2004, diretor: 'Marc Cherry', temporadas: 8, capa: 'https://i.pinimg.com/236x/15/cc/88/15cc8856eb29f92689dd1268077db45e.jpg' },
];

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Filmes</Text>
      {listaFilmes.map((filme, index) => (
        <Filme key={index} {...filme} />
      ))}

      <Text style={styles.titulo}>Séries</Text>
      {listaSeries.map((serie, index) => (
        <Serie key={index} {...serie} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginVertical: 10 },
});
