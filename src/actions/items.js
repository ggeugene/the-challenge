export function itemsFetchDataSuccess(items, nested) {
    return !nested
        ? {
              type: 'ITEMS_FETCH_DATA_SUCCESS',
              items,
              pending: false,
          }
        : {
              type: 'NESTED_ITEMS_FETCH_DATA_SUCCESS',
              items,
              pending: false,
          };
}

export function itemsFetchDataPending(nested = false) {
    return {
        type: nested ? 'NESTED_ITEMS_FETCH_DATA_PENDING' : 'ITEMS_FETCH_DATA_PENDING',
        pending: true,
    };
}

export function itemsFetchDataError(error, nested = false) {
    return {
        type: nested ? 'NESTED_ITEMS_FETCH_DATA_ERROR' : 'ITEMS_FETCH_DATA_ERROR',
        pending: false,
    };
}

export function itemsFetchData(url, nested = false) {
    return dispatch => {
        dispatch(itemsFetchDataPending(nested));
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then(response => response.json())
            .then(items => dispatch(itemsFetchDataSuccess(items, nested)))
            .catch(error => dispatch(itemsFetchDataError(error, nested)));
    };
}
