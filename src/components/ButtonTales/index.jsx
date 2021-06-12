import React from 'react';
import { withRouter } from 'react-router-dom';
import './style.css';

const ButtonTales = (props) => {


  const randomNumber = () => {
    return(
      Math.floor(Math.random() * props.appData.fairytales.length + 1)
    );
  };

  const handleClick = () => {
    let idTales = randomNumber();
    props.history.push(`/tales/${idTales}`)
    window.scrollTo({
      top: 0,
    });
  };

  return(
    <button className='buttontales' onClick={handleClick}>Vylosovat pohádku</button>
  );
};

export default withRouter(ButtonTales);