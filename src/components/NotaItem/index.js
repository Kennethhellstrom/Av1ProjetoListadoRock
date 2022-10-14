import React from "react";
import {Box, Titulo} from './styles';

export default ({data, index, onPress}) => {
    return (
        <Box onPress={()=>onPress(index)}>
             <Titulo>Metallica</Titulo>
        </Box>
    );
}