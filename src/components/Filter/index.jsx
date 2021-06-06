import React, { useState } from 'react';
import AutoCompleteInput from '../AutoCompleteInput';
import ButtonSearch from '../ButtonSearch';
import './style.css';
import data from '../../assets/database.json';


const Filter = () => {

  const [filtrKeyWords, setFiltrKeyWords] = useState([]);

  const filtrItems = () => {
    let filtrItems = [];
    
    filtrItems = data.fairytales.forEach(fairytale => (
      fairytale.keywords.some(keyword => (keyword === filtrKeyWords[0]))
    )); 

    return(
      filtrItems
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filtrItems();
    console.log(filtrKeyWords.length);
  };

  return(
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Vyberte maximálně 3 klíčová slova:</h4>
        <AutoCompleteInput filtrKeyWords={filtrKeyWords} setFiltrKeyWords={setFiltrKeyWords}/>
        <ButtonSearch filtrKeyWords={filtrKeyWords}/>        
      </form>
    </div>
  );
};

export default Filter;