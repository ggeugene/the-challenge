const initialState = {
    items: [],
    pending: false,
};
export function nestedItems(state = initialState, action) {
    switch (action.type) {
        case 'NESTED_ITEMS_FETCH_DATA_SUCCESS':
            return {
                ...state,
                items: action.items,
                pending: action.pending,
            };
        case 'NESTED_ITEMS_FETCH_DATA_PENDING':
            return {
                ...state,
                items: action.items,
                pending: action.pending,
            };
        case 'NESTED_ITEMS_FETCH_DATA_ERROR':
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
