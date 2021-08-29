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
      flex: 1,
      marginTop: 20,
      padding: 20,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      alignItems: 'stretch',
      backgroundColor: '#fff'
    },
    text:{
      fontSize: 14,
      width: 350,
      paddingBottom: 10,
      color: '#845587',
    },
    input:{
      alignSelf: "center",
      fontSize: 14,
      padding: 10,
    },
    text2:{
        fontSize: 22,
        width: 350,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
      },
    text3:{
      fontSize: 18,
      width: 350,
      paddingBottom: 10,
      alignItems: 'center',
      justifyContent: 'center'
     },
  });