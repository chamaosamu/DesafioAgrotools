import React, { useState, useEffect, useContext } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import { showMessage } from "react-native-flash-message";
import Button from '../../components/Button'
import storage from '../../services/storage'
import GetLocation from 'react-native-get-location'

const Answer = ({ route: { params } }: any) => {
  const { navigate } = useNavigation();
  const { id } = params;
  const { titulo } = params;
  const { usuario } = params;
  const { data } = params;
  const [ resposta, setResposta ] = useState('');
  const [ dataResposta, setDataResposta ] = useState('');
  const [ latlong, setLatlong ] = useState('');  
  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 5000,
    })
    .then(location => {
    const latlong = `${location.latitude}, ${location.longitude}`
    JSON.stringify(latlong)
    setLatlong(latlong)
    })
    .catch(error => {
    const { code, message } = error;
    console.warn(code, message);
    })

  const Alerta = () => {
      showMessage({
        message: "Alerta!",
        description: "Todos os campos devem ser preenchidos.",
        position: 'bottom',
        type: 'warning',
        icon: 'warning',
      });
  }

  async function handleSubmit() {
    if (resposta == '' || dataResposta == '' || latlong == '' ) {
      Alerta();
    }

    

    function replacer(key, value) {
      if (typeof value === "string") {
        return undefined;
      }
      return value;
    }
    

    if (resposta != '' && dataResposta != '' && latlong != '' ) {
      (async () => {
        await storage.insertResponse({id, titulo, usuario, data, resposta, dataResposta, latlong})
        showMessage({
          message: "Sucesso!",
          description: "Questionario respondido!",
          position: 'bottom',
          type: 'success',
          icon: 'success',
        });
      })();

    } 
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Responder Questionario</Text>
        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.itemsContainer}>
          <Text style={styles.text2}>Dados de criação:</Text>
          <Text style={styles.text}>Titulo: {titulo}</Text>
          <Text style={styles.text}>Usuário: {usuario}</Text>
          <Text style={styles.text}>Data de criação: {data}</Text>
          <Text style={styles.text2}>Responda o questionário:</Text>
          <Text style={styles.text}>Resposta</Text>
          <TextInput  value={resposta} onChangeText={t => setResposta(t)} placeholder="Ocorrencia..."/>
          <Text style={styles.text}>Data de resposta</Text>
          <TextInput  value={dataResposta} onChangeText={t => setDataResposta(t)} placeholder="22/12/2012"/>
          <Text style={styles.text}>LAT e LONG</Text>
          <TextInput value={latlong} onChangeText={t => setLatlong(t)} placeholder="-1122, -2233"/>

        </ScrollView>
        <Button content={"Responder"} color={'#49104A'} onPress={() => handleSubmit()}/>
    </View>
  );
}
export default Answer;