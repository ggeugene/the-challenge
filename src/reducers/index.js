import { combineReducers } from 'redux';
import { items } from './items';
import { nestedItems } from './nestedItems';

export default combineReducers({
    items,
    nestedItems,
});
