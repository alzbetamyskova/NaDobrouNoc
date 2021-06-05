import React from 'react';
import { Link } from 'react-router-dom';
import { PAGES } from '../../helpers/index.js';

const Menu = ({page}) => {

  return(
    <ul>
      {page === PAGES.home ? '' :
      <li>
        <Link to="/">Domů</Link>
      </li> }

      {page === PAGES.listoftales ? '' :
      <li>
        <Link to="/listoftales">Seznam pohádek</Link>
       </li> }

      {page === PAGES.about ? '' : 
      <li>
        <Link to="/about">O projektu</Link>
      </li> }
    </ul>
  );
};

export default Menu;