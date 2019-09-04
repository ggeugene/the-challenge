function destruct(obj) {
    const { id, items, pending, error } = obj;
    return {
        id,
        items,
        pending,
        error,
    };
}
export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return state.map(list =>
                list.id === action.id
                    ? {
                          ...list,
                          items: action.items,
                          pending: action.pending,
                          error: action.error,
                      }
                    : list
            );
        case 'ITEMS_FETCH_DATA_PENDING':
            // return state.map(list =>
            //     list.id === action.id
            //         ? {
            //               ...list,
            //               pending: action.pending,
            //           }
            //         : list
            // );
            return [...state, destruct(action)];
        case 'ITEMS_FETCH_DATA_ERROR':
            return state.map(list =>
                list.id === action.id
                    ? {
                          ...list,
                          pending: action.pending,
                          error: action.error,
                      }
                    : list
            );

        default:
            return state;
    }
}
