import { ActionType } from "../action-types"
import { Action } from "../actions"
import { Dispatch } from 'redux';

export const fetchItems = () => {
    return async (dispatch: Dispatch<Action>) => {
        const columns = [
            { field: 'id', headerName: 'ID', width: 100 },
            { field: 'author', headerName: 'Author', width: 230 },
            { field: 'bookName', headerName: 'Book Name', width: 230 },
            { field: 'datePublished', headerName: 'Date Published', width: 180 },
            { field: 'bookDetails', headerName: 'Book Details', width: 300 },
        ];

        const rows = [
            { id: 1, bookName: 'Snow', author: 'Jon', datePublished: '01-01-2021', bookDetails: 'sample text' },
            { id: 2, bookName: 'Lannister', author: 'Cersei', datePublished: '01-02-2021', bookDetails: 'sample text' },
            { id: 3, bookName: 'Lannister', author: 'Jaime', datePublished: '05-01-2021', bookDetails: 'sample text' },
            { id: 4, bookName: 'Stark', author: 'Arya', datePublished: '01-01-2021', bookDetails: 'sample text' },
            { id: 5, bookName: 'Taralert(garyen', author: 'Daenerys', datePublished: '01-01-2021', bookDetails: 'sample text' },
            { id: 6, bookName: 'Melisandre', author: null, datePublished: '07-01-2020', bookDetails: 'sample text' },
            { id: 7, bookName: 'Clifford', author: 'Ferrara', datePublished: '01-01-2021', bookDetails: 'sample text' },
            { id: 8, bookName: 'Frances', author: 'Rossini', datePublished: '01-05-2020', bookDetails: 'sample text' },
            { id: 9, bookName: 'Roxie', author: 'Harvey', datePublished: '01-02-2021', bookDetails: 'sample text' },
        ];

        dispatch({
            type: ActionType.GET_ITEMS_SUCCESS,
            payload: {
                rows: rows,
                columns: columns
            }
        });
    }
}
