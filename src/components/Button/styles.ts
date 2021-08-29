import styled from 'styled-components/native';
import { RectButton } from "react-native-gesture-handler";

export const Button = styled( RectButton )`
    height: 60px;
    width: 338px;
    flexDirection: row;
    borderRadius: 9px;
    alignSelf:center;
    overflow: hidden;
    marginTop:5px;
    marginBottom:5px;
    alignItems: center;
`;

export const ButtonText = styled.Text`
    width: 100%;
    fontSize: 18px;
    color: white;
    textAlign: center;
`;




