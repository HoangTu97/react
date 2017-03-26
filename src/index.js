// Libs
import React from 'react';
import { render } from 'react-dom';

// Resources
import './styles';
import './scripts';

// Routes
import routes from './routes';


// Render
render(
  routes ,
  document.getElementById('app')
);
