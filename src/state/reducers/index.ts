import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';

const reducers = combineReducers({
    itemsReducer: itemsReducer
})

export default reducers;

export type State = ReturnType<typeof reducers>