import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/pages/IndexPage';
import ShibaPage from './components/pages/ShibaPage';
import NotFoundPage from './components/pages/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="shiba/:id" component={ShibaPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;