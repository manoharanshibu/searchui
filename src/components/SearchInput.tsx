import React from 'react';

import './SearchView.css';

interface IProps {
    inputField: any
    handleOnChange: any
    searchedData: any
}

export const SearchInput: React.FC<IProps> = ({inputField, handleOnChange}) => {

  return (
    <div className="search-input">
      <div className="input-group">
        <input
          className="form-control border-right-0 border search-input-element"
          type="search"
          ref={inputField}
          placeholder='What are you searching for?'
          onChange={handleOnChange}
          aria-label='What are you searching for?'
          height="40px"
        />
        <span className="input-group-append searchicon">
          <div className="input-group-text bg-transparent">
            <i className="fa fa-search"></i>
          </div>
        </span>
      </div>
    </div>
  );
};
