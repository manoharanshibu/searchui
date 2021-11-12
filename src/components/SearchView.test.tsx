import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SearchView from './SearchView';

import { Provider } from 'react-redux'
import { store } from '../state/index';

describe(('SearchView Component'), () => {

    const initialState = {
        items: [],
        loadedItems: false
    }

    jest.mock('react-redux', () => ({
        useDispatch: () => { },
        useSelector: () => ({
            state: initialState,
        }),
    }));

    it('renders correctly', () => {
        const tree = renderer
            .create(<Provider store={store}><SearchView /></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})
