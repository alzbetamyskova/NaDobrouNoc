import React from 'react';
import { Link } from 'react-router-dom';
import { PAGES } from '../../helpers/index.js';
import './style.css';

const Menu = ({page}) => {

  return(
    <div className='menu'>
      <ul>
        {page === PAGES.home ? '' :
        <li>
          <Link className='link' to="/">Domů</Link>
        </li> }

        {page === PAGES.listoftales ? '' :
        <li>
          <Link className='link' to="/listoftales">Seznam pohádek</Link>
        </li> }

        {page === PAGES.about ? '' : 
        <li>
          <Link className='link' to="/about">O projektu</Link>
        </li> }
      </ul>
    </div>
  );
};

export default Menu;