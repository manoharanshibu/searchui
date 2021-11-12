import { Action } from '../actions/index';
import { ActionType } from '../action-types/index';

const initialState = {
    items: {
        rows: [],
        columns: []
    },
    loadedItems: false,
};

const itemsReducer = (state: any = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.GET_ITEMS_SUCCESS:
            return {
                ...state,
                loadedItems: true,
                items: action.payload
            };
        default:
            return state;
    }
}

export default itemsReducer;