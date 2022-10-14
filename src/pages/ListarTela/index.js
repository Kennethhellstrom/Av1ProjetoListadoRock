import React, {useLayoutEffect} from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import{
    Container,
    BotaoAdd,
    BotaoAddImg,
    ListaNotas,
    SemNotas,
    SemImg,
    SemNotasTexto
} from './styles';

import NotaItem from '../../components/NotaItem';

export default () => {
    const navigation = useNavigation();
    const list = [];
    //const list = useSelector(state => state.notes.list );

    useLayoutEffect(()=>{
        navigation.setOptions({
            title:'Rock Notes',
            headerRight: () => (
            <BotaoAdd underlayColor="transparent" onPress={()=>navigation.navigate('EditarNota')}>
                <BotaoAddImg source={require('../../assets/rock-and-roll.png')}/>
            </BotaoAdd>
            )
        });
    }, []);

    const ObterItem = (index) =>{
        navigation.navigate('EditarNota', {key: index});
    }

    return(
        <Container>
            {list.length > 0 && 
           <ListaNotas
           data={list}
           renderItem={(item, index)=>(
            <NotaItem
                data = {item}
                index={index}
                onPress={ObterItem}
            />
           )}
           keyExtractor={(item, index)=>index.toString()}
           />
            }
            {list.length == 0 &&
                <SemNotas>
                    <SemImg source={require('../../assets/guitar.png')}/>
                    <SemNotasTexto>
                            SUAS BANDAS PREFERIDAS
                    </SemNotasTexto>                   
                </SemNotas>
            }
        </Container>

    )
};