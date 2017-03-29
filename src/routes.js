import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Template from './components/Template';
import Home from './components/Home';
import Category from './components/Category';
import Login from './components/Login';

// Routes
const routes = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" render={()=><Template><Home/></Template>}/>
        <Route path="/customer/account/login" render={()=><Template><Login/></Template>}/>
        <Route path="/:cate" render={({match})=><Template><Category cate={match.params.cate}/></Template>}/>
      </Switch>
    </div>
  </Router>
);

export default routes;
