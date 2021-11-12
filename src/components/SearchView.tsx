import * as React from "react";
import { useEffect, useState, useRef } from "react";
import TableComponent from './TableComponent';

import './SearchView';
import { SearchInput } from './SearchInput';

import { State } from '../state';
import { useDispatch, useSelector } from "react-redux";

import { fetchItems } from "../state/action-creators";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const SearchView = () => {
  const dispatch = useDispatch();
  const inputField = useRef();
  const { items, loadedItems } = useSelector((state: State) => state.itemsReducer);

  const [searchedData, setSearchedData] = useState<any>({ rows: [], columns: [] });
  const [selected, setSelected] = useState('author')

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  useEffect(() => {
    setSearchedData(items)
  }, [loadedItems, items])

  const handleOnChange = (event: any) => {
    const _items = items.rows;
    if (event.target.value === '') {
      setSearchedData(items);
      return;
    }
    const data = _items.filter((item: any) => {
      if (selected === 'book') {
        return item && item.bookName ? item.bookName.toLowerCase().startsWith(event.target.value.toLowerCase()) : false;
      } else if (selected === 'date') {
        return item && item.datePublished ? new Date(item.datePublished).getTime() === new Date(event.target.value).getTime() : false
      } else {
        return item && item.author ? item.author.toLowerCase().startsWith(event.target.value.toLowerCase()) : false
      }
    })
    setSearchedData({
      columns: items.columns,
      rows: data
    })
  }


  return (
    <div className="container">
      <div className="search-container">
        <SearchInput
          searchedData={searchedData}
          inputField={inputField}
          handleOnChange={handleOnChange}
        />
      </div>
      <div className="radio-container">
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="search"
            defaultValue="author"
            name="radio-buttons-group"
            onChange={(e: any) => setSelected(e.target.value)}
          >
            <FormControlLabel value="author" control={<Radio />} label="Search By Author" />
            <FormControlLabel value="book" control={<Radio />} label="Search By Book Name" />
            <FormControlLabel value="date" control={<Radio />} label="Search By Date" />
          </RadioGroup>
        </FormControl>
      </div>
      <TableComponent rows={searchedData.rows} columns={searchedData.columns} />
    </div>
  )
}

export default SearchView;
