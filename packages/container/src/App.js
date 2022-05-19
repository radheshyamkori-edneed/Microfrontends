import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//import { mount } from 'marketing/MarketingApp';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
//console.log(mount);
export default () => {
  return (
    <BrowserRouter>
      <div>
          <h1>Hi there!</h1>
          <hr/>
          <Header />
          <MarketingApp />
      </div>
    </BrowserRouter>      
  );    
};

