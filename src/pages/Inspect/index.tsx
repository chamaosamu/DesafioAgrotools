import React, { useState, useEffect, useContext } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import { showMessage } from "react-native-flash-message";
import Button from '../../components/Button'
import storage from '../../services/storage'
import GetLocation from 'react-native-get-location'

const Inspect = ({ route: { params } }: any) => {
  const { navigate } = useNavigation();
  const { id } = params;
  const { titulo } = params;
  const { usuario } = params;
  const { data } = params;
  const { resposta } = params;
  const { dataResposta } = params;
  const { latLong } = params;

  async function handle() {
    navigate('Home')
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Visualizacao do questionário</Text>
        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.itemsContainer}>
          <Text style={styles.text2}>Dados de criação:</Text>
          <Text style={styles.text}>Titulo: {titulo}</Text>
          <Text style={styles.text}>Usuário: {usuario}</Text>
          <Text style={styles.text}>Data de criação: {data}</Text>
          <Text style={styles.text2}>Resposta do questionário:</Text>
          <Text style={styles.text3}>Resposta:</Text>
          <Text style={styles.text}>{resposta}</Text>
          <Text style={styles.text3}>Data de resposta:</Text>
          <Text style={styles.text}>{dataResposta}</Text>
          <Text style={styles.text3}>Localização:</Text>
          <Text style={styles.text}>{latLong}</Text>

        </ScrollView>
        <Button content={"Voltar a home"} color={'#49104A'} onPress={() => handle()}/>
    </View>
  );
}
export default Inspect;