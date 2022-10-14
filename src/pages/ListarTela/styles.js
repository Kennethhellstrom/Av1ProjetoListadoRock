import styled from "styled-components/native";

export const Container = styled.View`
flex:1;
background-color :#333;
justify-content:center;
align-items:center;
`;

export const BotaoAdd = styled.TouchableHighlight`
margin-right:15px;
`;

export const BotaoAddImg = styled.Image`
width:30px;
height:30px;
background-color:#fff;
`;

export const ListaNotas = styled.FlatList`
flex:1;
width:100%;
`;


export const SemNotas = styled.View`
    justify-content:center;
    align-items:center;
    `;
export const SemImg = styled.Image`
width:100px;
height:100px;
`;
export const SemNotasTexto = styled.Text`
    font-size:17px;
    color:#fff;
`;

