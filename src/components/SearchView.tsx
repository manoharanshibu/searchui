import * as React from "react";
import { useEffect, useState, useRef } from "react";
import TableComponent from './TableComponent';

import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';

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
  const [selected, setSelected] = useState('author');

  const [value, setValue] = React.useState<any>([null, null]);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  useEffect(() => {
    setSearchedData(items)
  }, [loadedItems, items]);

  const onDateChange = (newValue: any) => {
    setValue(newValue);
    handleOnChange(null, newValue)
  }

  const handleOnChange = (event: any, val?: any) => {
    const _items = items.rows;
    if (selected !== 'date' && event.target.value === '') {
      setSearchedData(items);
      return;
    }
    const data = _items.filter((item: any) => {
      if (selected === 'book') {
        return item && item.bookName ? item.bookName.toLowerCase().startsWith(event.target.value.toLowerCase()) : false;
      } else if (selected === 'date') {

        if (item && item.datePublished) {
          return new Date(item.datePublished).getTime() >= new Date(val[0]).getTime() &&
          new Date(item.datePublished).getTime() <= new Date(val[1]).getTime();
        } else {
          return false;
        }
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
          inputField={inputField}
          handleOnChange={handleOnChange}
          disabled={selected === 'date'}
        />
        <br /><br />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateRangePicker
            startText="Start Date"
            endText="End Date"
            value={value}
            disabled={selected !== 'date'}
            onChange={onDateChange}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
        </LocalizationProvider>

      </div>
      <div className="radio-container">
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="search"
            defaultValue="author"
            name="radio-buttons-group"
            onChange={(e: any) => setSelected(e.target.value)}
          >
            <FormControlLabel value="author" control={<Radio />} label="&nbsp;Search By Author" />
            <FormControlLabel value="book" control={<Radio />} label="&nbsp;Search By Book Name" />
            <FormControlLabel value="date" control={<Radio />} label="&nbsp;Search By Date" />
          </RadioGroup>
        </FormControl>
      </div>
      <TableComponent rows={searchedData.rows} columns={searchedData.columns} />
    </div>
  )
}

export default SearchView;
