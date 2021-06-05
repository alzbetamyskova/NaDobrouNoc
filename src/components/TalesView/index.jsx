import React from 'react';
import ButtonRead from '../ButtonRead';
import KeyWords from '../KeyWords';
import './style.css';

const TalesView = ({id, name, keywords, text}) => {
  return(
    <div className='talesview'>
      <h3>{name}</h3>
      <KeyWords keywords={keywords}/>
      <p>{text}</p>
      <ButtonRead id={id}/>
    </div>
  );
};

export default TalesView;