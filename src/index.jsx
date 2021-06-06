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
import About from './pages/About';
import ListOfTales from './pages/LisOfTales';
import AudioTales from './pages/AudioTales';

const App = () => (
  <div className="container">
    <Router>
      <Switch>
          <Route exact path="/"> <HomePage /> </Route>
          <Route exact path="/tales/:id" component={Tales}/>
          <Route exact path="/about"> <About /> </Route>
          <Route exact path="/listoftales"> <ListOfTales /> </Route>
          <Route exact path="/audiotales"> <AudioTales /> </Route>
      </Switch>
    </Router>
  </div>
);

render(<App />, document.querySelector('#app'));
