import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/';
import FlashMessage from "react-native-flash-message";

export default function App() {
  return (
    <NavigationContainer>
          <Routes />
      <FlashMessage position="top"/>
    </NavigationContainer>
  );
}
