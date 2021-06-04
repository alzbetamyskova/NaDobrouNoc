import React from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => (
  <div className="container">
    <header>
      <div className="logo"></div>
      <h1>Na dobrou noc</h1>
    </header>
    <main>
    </main>
    <footer>
      <p>© Alžběta Myšková, 2021</p>
    </footer>
  </div>
);

render(<App />, document.querySelector('#app'));
