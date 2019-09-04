import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import ItemList from './components/ItemList';

const store = configureStore();

render(
    <Provider store={store}>
        <ItemList url={'http://5af1eee530f9490014ead8c4.mockapi.io/items'} />
        <ItemList nested={true} url={'https://5d6fa5ab482b530014d2e620.mockapi.io/items'} />
    </Provider>,
    document.getElementById('app')
);
