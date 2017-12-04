import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppShell from './components/AppShell';
import IndexPage from './components/pages/IndexPage';
import ShibaPage from './components/pages/ShibaPage';
import NotFoundPage from './components/pages/NotFoundPage';

export default class Routes extends React.Component {
  render() {
    return (
      <AppShell>
        <Switch>
          <Route exact path='/' component={IndexPage} />
          <Route exact path="/shiba/:id" component={ShibaPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </AppShell>
    );
  }
}
