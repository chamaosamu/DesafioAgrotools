import React, { useState, useContext, useEffect, useCallback } from "react";
import { View, Text, ScrollView, FlatList, RefreshControl } from 'react-native';
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import getRealm from "../../services/realm";
import { ItemCard } from "../../components/Item";
import { showMessage } from "react-native-flash-message";
import storage from '../../services/storage'

//import AppItem from '../components/AppItem';
//import Database from '../database/Database';

export default function Home(){

  const [items, setItems] = useState([]);
  const { navigate } = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const abortController = new AbortController();

   useEffect(() => {
    let mounted = true;
    const runAsync = async () => {
      if (!mounted) return;
        //iniciando realm...
        const realm = await getRealm();
        //exibicao
        const data = realm.objects('Questionario').sorted('id', true);
        setItems(data)
        console.log(data)
    }
    runAsync();
    return () => {
      mounted = false;
    }
  }, []);


  async function reload(){
    try {
      const realm = await getRealm();
      const data = realm.objects('Questionario').sorted('id', true);
      setItems(data);
    }
    catch (error) {
      if (abortController.signal.aborted) {
        showMessage({
          message: "Erro!",
          description:"Não foi possivel carregar novos alertas/indicadores, tente novamente.",
          position: 'bottom',
          type:'danger',
          icon:'danger',
        })
      }
      else
        throw error;
    };
    setRefreshing(false)
  }
  const renderItem = useCallback(
    ({item}) => <ItemCard
    data={item}
    remove={() => {
      showMessage({
        message: "Apagar?",
        description: "Toque para confirmar!",
        onPress: () => deleteQuestionario(item.id),
        hideOnPress:false,
        position: 'bottom',
        type:'info',
        icon:'info',
        duration: 2500,
      });
    }}
    onPress={() => {
      if (item.answered == true){
      navigate("Inspect", {
      id: item.id,
      titulo: item.titulo,
      usuario: item.usuario,
      data: item.data,
      resposta: item.resposta,
      dataResposta: item.dataResposta,
      latlong: item.latlong
      }
    )}
      else{
      navigate("Answer", {
      id: item.id,
      titulo: item.titulo,
      usuario: item.usuario,
      data: item.data,
      resposta: item.resposta,
      dataResposta: item.dataResposta,
      latlong: item.latlong,
      }
    )}}}/>,
    []
  );

  async function deleteQuestionario(item:any){
    showMessage({
      message: "Sucesso",
      description: "Painel apagado com sucesso",
      position: 'bottom',
      type:'success',
      icon:'success',
      duration: 2500,
    });
    storage.deleteQuestionario(item)
    const realm = await getRealm();
    const data = realm.objects('Questionario');    
    console.log(data)
    setItems(data);
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Questionários</Text>
        <View style={styles.itemsContainer}>
        {items? (
          <FlatList
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => reload()} />}
            keyboardShouldPersistTaps="handled"
            data={items}
            renderItem={renderItem}
            maxToRenderPerBatch={4}
            initialNumToRender={7}
            onEndReachedThreshold={0.1}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            >
          </FlatList>): 
          <Text>Sem paineis por enquanto...</Text>}
        </View>
        <Button content={"Adicionar questionário"} color={'#49104A'} onPress={() => navigate('AddQuestionario')}/>
    </View>
    );
}