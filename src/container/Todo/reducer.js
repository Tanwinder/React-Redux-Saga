const initialState = {
    value: "",
    listData: [],
    loader: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'ADD_ITEM_ASYNC':
            return {
                ...state,
                loader: false,
                listData: [...state.listData, action.item]
            };
        case 'UPDATE_VALUE':
            return {
                ...state,
                loader: false,
                value: action.value
            }
        case 'LOADING':
            return {
                ...state,
                loader: true
            }
        default:
            return state;
    }
}