import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './containers/MainLayout/MainLayout';

const App = (props) => (
  <Router>
    <MainLayout {...props} />
  </Router>
);

export default App;