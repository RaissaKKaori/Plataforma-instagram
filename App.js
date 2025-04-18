import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import List from './src/List';


export default function App() {
const {feed, setFeed} = useState([
  {
    id: '1',
    nome: 'Raissa kaori',
    descricao: 'Sou linda',
    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
    publicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
    like: true,
    likers: 1
  },
  {
    id: '2',
    nome: 'Raissa kaori',
    descricao: 'Sou linda',
    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
    publicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
    like: true,
    likers: 1
  },
  {
    id: '3',
    nome: 'Raissa kaori',
    descricao: 'Sou linda',
    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
    publicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
    like: true,
    likers: 1
  },
  {
    id: '4',
    nome: 'Raissa kaori',
    descricao: 'Sou linda',
    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
    publicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
    like: true,
    likers: 1
  },
  {
    id: '5',
    nome: 'Raissa kaori',
    descricao: 'Sou linda',
    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
    publicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
    like: true,
    likers: 1,
  }
])

  return (
    <View style={styles.container}>
      <Header/>

      <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={ (item) => item.id }
      data={feed}
      renderItem={ ({ item }) => <List data={item} /> }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})
