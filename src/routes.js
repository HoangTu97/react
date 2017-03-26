import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// components
import Template from './components/Template';
import Home from './components/Home';
import Category from './components/Category';

// Routes
const routes = (
  <Router>
    <div>
      <Route path="/" render={({path})=>(
        <Template>
          <Route exact path={path} component={Category} />
          <Route path={path + '/:cate'} component={Category} />
        </Template>
      )}/>
    </div>
  </Router>
);

export default routes;
