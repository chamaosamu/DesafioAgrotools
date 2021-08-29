import React, { useState, useEffect, useContext } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import { showMessage } from "react-native-flash-message";
import Button from '../../components/Button'
import storage from '../../services/storage'

export default function AddQuestionario() {
  const { navigate } = useNavigation();
  const [ titulo, setTitulo ] = useState('');
  const [ usuario, setUsuario ] = useState('');
  const [ data, setData ] = useState('');  
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
    if (titulo == '' || usuario == '' || data == '' ) {
      Alerta();
    }

    if (titulo != '' && usuario != '' && data != '' ) {
      (async () => {
        await storage.insertQuestionario({titulo, usuario, data})
        showMessage({
          message: "Sucesso!",
          description: "Questionario criado!",
          position: 'bottom',
          type: 'success',
          icon: 'success',
        });
      })();

    } 
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Adicionar Questionario</Text>
        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.itemsContainer}>
          <Text style={styles.text}>Título</Text>
          <TextInput  value={titulo} onChangeText={t => setTitulo(t)} placeholder="Ex: Questionario 1" secure={false}/>
          <Text style={styles.text}>Usuário</Text>
          <TextInput  value={usuario} onChangeText={t => setUsuario(t)} placeholder="Ex: Souza" secure={false}/>
          <Text style={styles.text}>Data</Text>
          <TextInput value={data} onChangeText={t => setData(t)} placeholder="12/12/12"/>
        </ScrollView>
        <Button content={"Pronto"} color={'#49104A'} onPress={() => handleSubmit()}/>
    </View>
  );
}