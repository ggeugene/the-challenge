export function itemsFetchDataSuccess(items, id) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        id,
        pending: false,
        items,
        error: '',
    };
}

export function itemsFetchDataPending(id) {
    return {
        type: 'ITEMS_FETCH_DATA_PENDING',
        id,
        pending: true,
        items: [],
        error: '',
    };
}

export function itemsFetchDataError(error, id) {
    return {
        type: 'ITEMS_FETCH_DATA_ERROR',
        id,
        pending: false,
        error,
    };
}

export function itemsFetchData(url, id) {
    return dispatch => {
        dispatch(itemsFetchDataPending(id));
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then(response => response.json())
            .then(items => dispatch(itemsFetchDataSuccess(items, id)))
            .catch(error => dispatch(itemsFetchDataError(error, id)));
    };
}
