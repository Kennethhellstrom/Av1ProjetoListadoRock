import React, {useState, useEffect, useLayoutEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import{
    Container,
    TituloIn,
    BodyIn,
    BotaoSalvar,
    SalvarImg
} from './styles';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const list = useSelector(state => state.notes.list);

    const [title , setTitle] = useState('');
    const [body , setBody] = useState('');
    const [status , setStatus] = useState('new');

    useEffect(()=>{
            if(route.params?.key != undefined && list[route.params.key]){
                setStatus('edit');
                setTitle(list[route.params.key].title);
                setBody(list[route.params.key].body);
            }
    },[]);


    useLayoutEffect(()=>{
        navigation.setOptions({
            title: status == 'new'? 'Sua banda' : 'Sua banda',
            headerRight: () =>(
                <BotaoSalvar underlayColor= 'transparent' onPress={Salvar}>
                    <SalvarImg source ={require('../../assets/rock.png')}/>
                </BotaoSalvar>
            )
        });
        [status, title, body]});

        const Salvar = () =>{
            if (title != '' && body != ''){

                    dispatch({
                        type:'ADD_NOTE',
                        payload:{title, body}

                    });
                
            }
            else{
                alert('Digita algo aí')
            }
        }

    return(


        <Container>
            <TituloIn
            value = {title}
            onChangeText = {t=>setTitle(t)}
            placeholder="Digite a sua banda"
            placeholderTextColor="#CCC"
            autoFocus={true}
            />
            <BodyIn
             value = {body}
             onChangeText = {t=>setBody(t)}
            placeholder="Digite as musicas"
            placeholderTextColor="#CCC"
            multiline = {true}
            textAllignVertical ="top"
            />
        </Container>
    )
}