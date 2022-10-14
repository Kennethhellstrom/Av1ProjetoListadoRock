import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import ListarTela from '../pages/ListarTela';
import EditarNotaTela from '../pages/EditarNotaTela';
const MainStack = createStackNavigator();

export default () => {
    return(
    <MainStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor: '#222'
        },
        headerTintColor:'#FFF'
    }}>
        <MainStack.Screen name="Lista" component={ListarTela}/>
        <MainStack.Screen name="EditarNota" component={EditarNotaTela}/>
    </MainStack.Navigator>
)};