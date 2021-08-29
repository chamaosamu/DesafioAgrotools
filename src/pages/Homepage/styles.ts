import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#454545',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      color: '#fff',
      fontSize: 25,
      fontFamily: 'Archivo_700Bold',
      marginTop: 30,
      marginBottom: 10
    },
    scrollContainer: {
      flex: 1,
      width: '85%'
    },
    itemsContainer: {
      width: '85%',
      flex: 1,
      marginTop: 20,
      padding: 20,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      alignItems: 'stretch',
      backgroundColor: '#fff'
    },
    separator:{
      flex: 1,
      height: 8,
      backgroundColor: '#ffffff'
    }
  });