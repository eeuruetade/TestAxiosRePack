import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';

const App = () => {
  // const api = axios.create({
  //   baseURL: 'https://rickandmortyapi.com/api/', // Reemplaza con tu URL base
  //   timeout: 1000,
  //   headers: {'Content-Type': 'application/json'},
  // });

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener personajes
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <Text>{JSON.stringify(characters ?? [])}</Text>
    </View>
  );
};

export default App;
