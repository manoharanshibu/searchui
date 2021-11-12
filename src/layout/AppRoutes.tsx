import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchView from '../components/SearchView';

const AppRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <SearchView />} />
      </Switch>
    </>
  );
};

export default AppRoutes;
