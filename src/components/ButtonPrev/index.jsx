import React from 'react';
import './style.css';
import { withRouter } from 'react-router-dom';
import data from '../../assets/database.json';

const ButtonPrev = (props) => {

  // const handleClick = () => {
  //   const idTales = něconěco;
  //   props.history.push(`/tales/${idTales - 1}`);
  // }

  return(

    <button className='buttonprev' >Předchozí pohádka</button>
  );
};

export default withRouter(ButtonPrev);