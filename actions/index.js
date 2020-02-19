export const selectBook = (book) => {
    return {
        type:'select_book',
        payload: book
    }
}

export const deselect = () => {
    return {
        type:'deselect_book',
        payload: {}
    }
}