import React, { useContext }from 'react';
import { View } from 'react-native';
import { ButtonGroup, Button, TextButton, IconTrash, AnsweredFalse, AnsweredTrue, Container } from './styles';

import 'moment/min/moment-with-locales.min.js';


export function ItemCard({data, remove, onPress }:any) {
  return (
      <ButtonGroup>
          <Button onPress={onPress}>
                <TextButton>{data.titulo}</TextButton>
                <Container>
              {data.answered ?
                    <AnsweredTrue>RESPONDIDO</AnsweredTrue>
                    :
                    <AnsweredFalse>NÃO RESPONDIDO</AnsweredFalse>
                }
              <IconTrash size={24} onPress={remove}>APAGAR</IconTrash>
              </Container>
          </Button>
      </ButtonGroup>
  )
}

export const Item = React.memo(ItemCard);