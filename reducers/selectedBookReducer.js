export default (state = {}, action) => {
    switch(action.type){
        case 'select_book':
            return action.payload
        case 'deselect':
            return {}
        default:
            return state;
}
}