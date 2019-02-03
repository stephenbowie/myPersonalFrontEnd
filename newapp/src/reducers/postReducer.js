const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action) {
    console.log('reducer');
    switch (action.type) {
        case 'GET_DATA':
            return {
                ...state,
                items: action.payload

            }
        case 'NEW_DATA':
            return {
                ...state,
                item: action.payload

            }
        default:
            return state;
    }
}