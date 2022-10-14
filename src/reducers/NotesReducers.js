const initialState = {
    list:[
        {title:'Primeira Nota', body:'testando 1,2,3...'}
    ]
}

export default (state = initialState, action) => {
    let newList = [...state.list];
    switch(action.type){
        case 'ADD_NOTE':
        newList.push({
            title:action.payload.title,
            body: action.payload.body
        })
        break
    }
    
    return {...state, list: newList};
}