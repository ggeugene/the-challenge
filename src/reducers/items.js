const initialState = {
    items: [],
    pending: false,
    error: '',
};
export function items(state = initialState, action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return {
                ...state,
                items: action.items,
                pending: action.pending,
            };
        case 'ITEMS_FETCH_DATA_PENDING':
            return {
                ...state,
                items: action.items,
                pending: action.pending,
            };
        case 'ITEMS_FETCH_DATA_ERROR':
            return {
                ...state,
                items: action.items,
                pending: action.pending,
                error: action.error,
            };

        default:
            return state;
    }
}
