import { ActionType } from '../action-types/index';

interface IGetItemsSuccessAction {
    type: ActionType.GET_ITEMS_SUCCESS
    payload: any
}

export type Action = IGetItemsSuccessAction