import React from 'react';
import './style.css';

const ButtonSearch = ({filtrKeyWords}) => {

  return(
    <button disabled={filtrKeyWords.length >= 4 && filtrKeyWords.length === 0} className={`buttonsearch ${(filtrKeyWords.length >= 4 && filtrKeyWords.length === 0) ? 'disabled' : ''}`}>Hledat</button>
  );
};

export default ButtonSearch;