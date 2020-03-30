export const updateValue = (value) => {
    return ({type: 'UPDATE_VALUE', value})
};
export const addItem= (item) => {
    return {
        type: 'ADD_ITEM', 
        item
    }
}

export const addItemAsync = (item) => {
    return {
        type: 'ADD_ITEM_ASYNC', 
        item
    }
}