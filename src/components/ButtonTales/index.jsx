import React from 'react';
import { withRouter } from 'react-router-dom';
import data from '../../assets/database.json';

const ButtonTales = (props) => {


  const randomNumber = () => {
    return(
      Math.floor(Math.random() * data.fairytales.length + 1)
    );
  };

  const handleClick = () => {
    let idTales = randomNumber();
    props.history.push(`/tales/${idTales}`)
  };

  return(
    <button className='buttontales' onClick={handleClick}>Vylosovat pohádku</button>
  );
};

export default withRouter(ButtonTales);