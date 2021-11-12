
import React from 'react';
import { withRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Header from '../components/Header';

const BaseLayout = () => {
  const previousUrl = sessionStorage.getItem('searchuiproject');
  if (previousUrl) {
    sessionStorage.removeItem('searchuiproject');
    window.location.href = previousUrl;
  }

  return (
    <>
      <Header title='SEARCHUI' />
      <AppRoutes />
    </>
  );
};

export default withRouter(BaseLayout);
