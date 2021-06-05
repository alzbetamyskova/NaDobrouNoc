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

      <li>
        <Link to="/about">O projektu</Link>
       </li>
      <li>
        <Link to="/users">Seznam pohádek</Link>
      </li>
    </ul>
  );
};

export default Menu;