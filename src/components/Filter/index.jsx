import React, { useState } from 'react';
import AutoCompleteInput from '../AutoCompleteInput';
import ButtonSearch from '../ButtonSearch';
import './style.css';
import data from '../../assets/database.json';


const Filter = ({setViewTales}) => {

  const [filtrKeyWords, setFiltrKeyWords] = useState([]);

  const filtrItems = () => {
    let filtrItems = [];

    let condition1 = false;
    let condition2 = false;
    let condition3 = false;
    
    data.fairytales.forEach(fairytale => {
      condition1 = fairytale.keywords.some(keyword => (keyword === filtrKeyWords[0]))
      if (!condition1 && filtrKeyWords[1]) {
      condition2 = fairytale.keywords.some(keyword => (keyword === filtrKeyWords[1]))
      } 
      if ((!condition1 || !condition2) && filtrKeyWords[2]) {
      condition3 = fairytale.keywords.some(keyword => (keyword === filtrKeyWords[2]))
      };
      if (condition1 || condition2 || condition3) {
        filtrItems.push(fairytale)
      };
    }); 

    

    return(
      filtrItems
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let talesArray = filtrItems();
    setViewTales(talesArray);
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