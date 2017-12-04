import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import Routes from '../routes';

export default class App extends React.Component {
  render() {
    return (
      <Router basename="/shiba-squad">
        <Routes {...this.props} />
      </Router>
    );
  }
}
