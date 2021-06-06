import React from 'react';
import AutoCompleteInput from '../AutoCompleteInput';
import './style.css';


const Filter = () => {
  return(
    <div>
      <form className='form'>
        <h4>Vyberte klíčové slovo:</h4>
        <AutoCompleteInput />        
      </form>
    </div>
  );
};

export default Filter;