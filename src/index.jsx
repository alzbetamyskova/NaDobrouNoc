import React from 'react';
import { render } from 'react-dom';
import HomePage from './pages/HomePage';
import Tales from './pages/Tales';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './style.css';

const App = () => (
  <div className="container">
    <Router>
      <Switch>
          <Route exact path="/"> <HomePage /> </Route>
          <Route exact path="/tales/:id" component={Tales}/>
      </Switch>
    </Router>
  </div>
);

render(<App />, document.querySelector('#app'));
