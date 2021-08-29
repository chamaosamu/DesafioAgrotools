import styled from 'styled-components/native';

export const ButtonGroup = styled.View`
    justifyContent: center;
    alignSelf: center;
    width: 100%;
`;
export const Button = styled.TouchableOpacity`
    borderColor: #B7A3B8;
    borderWidth: 2px;
    borderRadius: 6px;
    padding: 4px;
    justifyContent: space-between;
    alignItems: center;
`;

export const IconTrash = styled.Text`
    color: #EB4336;
    height: 30px;
    width: 70px;
    borderWidth: 1px;
    borderRadius: 2px;
    borderColor: #EB4336;
    padding: 7px;

`;

export const Container = styled.View`
    flexDirection: row;
    width: 100%;
    justifyContent: space-between;

`;

export const TextButton = styled.Text`
    color: #845587;
    fontSize: 28px;
    alignSelf: center;

`;

export const TextVer = styled.Text`
    color: #454545;
    fontSize: 10px;
`;

export const TextResponder = styled.Text`
    color: #454545;
    fontSize: 10px;
`;

export const AnsweredTrue = styled.Text`
    color: #30A967;
    borderWidth: 1px;
    borderRadius: 2px;
    borderColor: #30A967;
    fontSize: 10px; 
    alignSelf: center;
    padding: 7px;
`;

export const AnsweredFalse = styled.Text`
    color:#E2B85C;
    fontSize: 10px; 
    borderWidth: 1px;
    borderRadius: 2px;
    borderColor: #E2B85C;
    alignSelf: center;
    padding: 7px;

`;