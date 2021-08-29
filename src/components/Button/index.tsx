import React from 'react';
import { Button, ButtonText } from './styles';
interface ButtonProps {
    content: string;
    color: string;
    onPress: Function;
}
const ButtonComponent: React.FC<ButtonProps> = ({ content, onPress, color }) => {
    return (
      <Button onPress = { onPress } backgroundColor = { color } >
          <ButtonText>{ content }</ButtonText>
      </Button>
    )
}
export default ButtonComponent;