
export const todoReducer = (state = [], action) => {
    switch (action.type) {
       case 'add':
           // aqui el payload es un objeto TODO completo
           return [...state, action.payload];
        case 'delete':
            // aqui el payload es el id
            return state.filter(todo => todo.id !== action.payload );
        case 'toggle':
            // aqui el payload es el id
            return state.map( todo => 
                ( todo.id === action.payload ) ? 
                    { ...todo, done: !todo.done } :
                    todo
            );
        case 'toggle-legacy':
                return state.map( todo => {
                    if ( todo.id === action.payload ) {
                        return {
                            ...todo,
                            done: !todo.done
                        };
                    } else { return todo; }
                });
        default:
            return state;
    }
}