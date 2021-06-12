import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './style.css';
import HomePage from './pages/HomePage';
import Tales from './pages/Tales';
import About from './pages/About';
import ListOfTales from './pages/LisOfTales';
import AudioTales from './pages/AudioTales';

const App = () => { 

  const [appData, setAppData] = useState('');

  useEffect(
    () => {
      !appData && fetch('https://nadobrounoc-e4493-default-rtdb.europe-west1.firebasedatabase.app/data.json')
        .then((resp) => resp.json())
        .then((json) => {
          setAppData(json);
        })
    }, [appData]
  );

return(
  <div className="container">
    <Router>
      <Switch>
          <Route exact path="/" component={(props) => <HomePage {...props} appData={appData}/>}/>
          <Route exact path="/tales/:id" component={(props) => <Tales {...props} appData={appData} setAppData={setAppData}/>}/>
          <Route exact path="/about"> <About /> </Route>
          <Route exact path="/listoftales" component={(props) => <ListOfTales {...props} appData={appData} setAppData={setAppData}/>}/>
          <Route exact path="/audiotales" component={(props) => <AudioTales {...props} appData={appData} setAppData={setAppData}/>}/>
      </Switch>
    </Router>
  </div>
);
};

render(<App />, document.querySelector('#app'));
